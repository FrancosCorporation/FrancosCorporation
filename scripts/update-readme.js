// ============================================
// 🔄 SCRIPT DE ATUALIZAÇÃO DO README.md
// ============================================
// Este script atualiza automaticamente o README.md com:
// - Status do servidor (online/offline)
// - Commits dos últimos 30 dias
// - Stars e forks do repositório
// - Métricas de atividade
// ============================================

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configurações
const API_URL = 'https://francoscorporation.ddns.net/api/status';
const REPO_OWNER = process.env.GITHUB_REPOSITORY?.split('/')[0] || '';
const REPO_NAME = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const GITHUB_API_TOKEN = process.env.GITHUB_TOKEN || '';

// Função para fazer requisições HTTPS
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    req.end();
  });
}

// Função para atualizar README com dados reais
async function updateReadme() {
  console.log('🔄 Iniciando atualização do README.md...');

  try {
    // 1. Obter status do servidor
    const serverStatus = await fetch(API_URL);
    if (serverStatus.status === 200) {
      const statusData = JSON.parse(serverStatus.data);
      console.log('✅ Status do servidor:', statusData.status);

      // Atualizar placeholder de status no README
      updatePlaceholder(
        '## 📡 Status do Sistema',
        `| Componente | Status | Detalhes |
|------------|--------|----------|
| **Servidor Principal** | \`\${statusData.status}\` ${getStatusEmoji(statusData.status)} | Sistema Operacional |
| **API Gateway** | \`\${statusData.status}\` ✅ | https://francoscorporation.ddns.net/api/status |
| **GitHub Actions** | \`ACTIVE\` 🟢 | Workflow rodando automaticamente |
| **Repositório** | \`PUBLIC\` 🔓 | ${REPO_OWNER}/${REPO_NAME} |

\`\`\`bash
# Status do Sistema
$ export SYSTEM_STATUS="\${statusData.status}"${getStatusEmoji(statusData.status)}
$ export API_URL="https://francoscorporation.ddns.net"
$ export REPO="${REPO_OWNER}/${REPO_NAME}"
✅ Sistema Operacional - Todos os serviços ativos
\`\`\``,
        'README.md'
      );
    } else {
      console.log('⚠️  Status do servidor não disponível');
    }

    // 2. Obter commits dos últimos 30 dias
    const commits = await getCommitsLast30Days();
    console.log(`✅ Commits nos últimos 30 dias: ${commits.length}`);

    updatePlaceholder(
      '### 📈 Métricas do Repositório',
      `| Métrica | Valor | Status |
|---------|-------|--------|
| ⭐ Stars | **${getStars()}** | Atualizado diariamente |
| 🔀 Forks | **${getForks()}** | Atualizado diariamente |
| 👁️ Watchers | **1** | Atualizado diariamente |
| 📝 Commits (30d) | **${commits.length}** | Atualizado diariamente |`,
      'README.md'
    );

    // 3. Obter stars e forks do repositório
    const stars = getStars();
    const forks = getForks();
    console.log(`✅ Stars: ${stars}, Forks: ${forks}`);

    updatePlaceholder(
      '### ⚡ Status do Repositório',
      `| Métrica | Valor |
|---------|-------|
| ⭐ Stars | **${stars}** |
| 🔀 Forks | **${forks}** |
| 👁️ Watchers | **1** |
| 📝 Commits (30d) | **${commits.length}** |`,
      'README.md'
    );

    // 4. Commitar e pushar as alterações
    await commitChanges();

    console.log('✅ README.md atualizado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao atualizar README:', error.message);
    process.exit(1);
  }
}

// Função para obter commits dos últimos 30 dias
function getCommitsLast30Days() {
  const gitLog = require('child_process').execSync('git log --since="30 days ago" --oneline | wc -l', { encoding: 'utf8' });
  return parseInt(gitLog.trim(), 10);
}

// Função para obter stars do repositório
function getStars() {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          const repoData = JSON.parse(data);
          resolve(repoData.stargazers_count || 0);
        } else {
          reject(new Error(`Erro ao obter stars: ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

// Função para obter forks do repositório
function getForks() {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          const repoData = JSON.parse(data);
          resolve(repoData.forks_count || 0);
        } else {
          reject(new Error(`Erro ao obter forks: ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

// Função para atualizar placeholder no README
function updatePlaceholder(searchText, newText, filePath = 'README.md') {
  const readmePath = path.join(__dirname, '..', filePath);
  let content = fs.readFileSync(readmePath, 'utf8');
  
  // Verificar se o texto de busca existe
  if (!content.includes(searchText)) {
    console.log(`⚠️  Placeholder não encontrado: "${searchText}"`);
    return;
  }

  // Substituir o placeholder pelo novo conteúdo
  content = content.replace(searchText, newText);

  fs.writeFileSync(readmePath, content, 'utf8');
  console.log('✅ Atualizado:', searchText);
}

// Função para obter emoji baseado no status
function getStatusEmoji(status) {
  const emojis = {
    online: '🟢',
    offline: '🔴',
    maintenance: '🟡'
  };
  return emojis[status.toLowerCase()] || '⚪';
}

// Função para commitar e pushar as alterações
async function commitChanges() {
  const git = require('child_process');
  
  try {
    // Configurar usuário do Git
    git.execSync('git config user.name "FrancosCorp Bot"');
    git.execSync('git config user.email "bot@francoscorporation.com"');

    // Adicionar alterações
    git.execSync('git add README.md');

    // Tentar fazer commit (ignora se não houver mudanças)
    const result = git.execSync(
      'git commit -m "🔄 Update README with latest stats and server status"',
      { encoding: 'utf8' }
    );

    if (!result.includes('nothing to commit')) {
      console.log('✅ Commit realizado:', result.trim());
      
      // Pushar para o repositório remoto
      git.execSync('git push');
      console.log('✅ Alterações pushadas com sucesso!');
    } else {
      console.log('ℹ️  Nenhuma alteração para commitar');
    }
  } catch (error) {
    console.error('❌ Erro ao commitar:', error.message);
  }
}

// Executar a atualização
updateReadme();
