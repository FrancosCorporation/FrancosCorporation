<!-- ============================================
     📊 GITHUB README STATS - CONFIGURAÇÃO
     ============================================ -->

# Configuração de GitHub Readme Stats

Este diretório contém configurações para integração com ferramentas de terceiros.

## 🎯 Ferramentas Disponíveis

### 1. **github-readme-stats** (Recomendado)

Gera gráficos automáticos das suas estatísticas do GitHub:

- ✅ Commits totais
- ✅ Contribuições semanais
- ✅ Top Languages
- ✅ Status de atividade
- ✅ Repositórios e projetos

**Configuração:** `.readmestatsrc.json`

### 2. **readme-stats-plus** (Alternativa)

Versão mais completa com:

- 📈 Gráficos avançados
- 🎨 Temas personalizáveis
- 🔥 Efeitos de animação
- 🌐 Suporte multilíngue

## 📋 Variáveis Disponíveis

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `{{ github.repository_owner }}` | Nome do usuário/organização | `rodolfo-franco` |
| `{{ github.repository }}` | Nome do repositório | `FrancosCorporation` |
| `{{ env.STARS }}` | Número de stars | `123` |
| `{{ env.FORKS }}` | Número de forks | `45` |

## 🚀 Como Usar

### Opção 1: Workflow Automático (Recomendado)

O workflow `.github/workflows/readme-stats.yml` já está configurado para:

- Rodar automaticamente toda segunda-feira
- Gerar stats visuais
- Atualizar o README.md

### Opção 2: API Direta

```bash
# URL da API do github-readme-stats
https://github-readme-stats.vercel.app/api?username=RODULFO-FRANCO&show_icons=true&theme=dark

# Com parâmetros personalizados
https://github-readme-stats.vercel.app/api?username=RODULFO-FRANCO&count_private=true&locale=pt_br
```

### Opção 3: Embed em README

Use este bloco no seu README.md:

```markdown
<!-- GitHub Readme Stats -->
![GitHub Readme Stats](https://github-readme-stats.vercel.app/api?username={{ github.repository_owner }}&show_icons=true&count_private=true&theme=dark&icon_shape=rectangle&locale=pt_br)
```

## 🎨 Temas Disponíveis

| Tema | URL Exemplo |
|------|-------------|
| Default | `&theme=default` |
| Dark | `&theme=dark` |
| High Contrast | `&theme=high-contrast` |
| Monokai | `&theme=monokai` |
| Gruvbox | `&theme=gruvbox` |

## ⚙️ Parâmetros Principais

| Parâmetro | Descrição | Valores |
|-----------|-----------|---------|
| `username` | Nome do usuário GitHub | Obrigatório |
| `show_icons` | Mostrar ícones | `true/false` |
| `hide` | Ocultar seções | Array de strings |
| `count_private` | Contar repositórios privados | `true/false` |
| `theme` | Tema visual | Ver tabela acima |
| `icon_shape` | Formato dos ícones | `circle`, `rectangle` |
| `locale` | Idioma da interface | `pt_br`, `en`, etc. |

## 📊 Métricas Disponíveis

### 1. **Contributions Graph**
- Visualização de atividades semanais
- Cor codificada por linguagem
- Histórico de 365 dias

### 2. **Top Languages**
- Distribuição por linguagem
- Porcentagem de código
- Repositórios incluídos

### 3. **Status**
- Commits totais
- Issues abertas/fechadas
- Pull requests

### 4. **Repositories**
- Lista de repositórios públicos
- Stars e forks por repo
- Última atualização

## 🔧 Customização Avançada

### Exemplo: README Personalizado

```markdown
<div align="center">

<!-- Stats Principal -->
![GitHub Readme Stats](https://github-readme-stats.vercel.app/api?username=RODULFO-FRANCO&show_icons=true&count_private=true&theme=dark&icon_shape=rectangle&locale=pt_br)

<!-- Stats de Contribuições -->
![Contributions Graph](https://contrib.rocks/image?profile=RODULFO-FRANCO&width=800)

</div>
```

### Exemplo: Múltiplas Estatísticas

```markdown
<div align="center">

## 📊 Dashboard de Performance

| Métrica | Valor |
|---------|-------|
| ⭐ Stars | ![Stars](https://img.shields.io/github/stars/RODULFO-FRANCO/FrancosCorporation?style=for-the-badge) |
| 🔀 Forks | ![Forks](https://img.shields.io/github/forks/RODULFO-FRANCO/FrancosCorporation?style=for-the-badge) |
| 👁️ Watchers | ![Watchers](https://img.shields.io/github/watchers/RODULFO-FRANCO/FrancosCorporation?style=for-the-badge) |

</div>
```

## 🛠️ Ferramentas Complementares

### 1. **contrib.rocks** (Contribuições Visuais)

```markdown
![Contributions](https://contrib.rocks/image?profile={{ github.repository_owner }}&width=800)
```

### 2. **shields.io** (Badges Personalizados)

```markdown
[![Stars](https://img.shields.io/github/stars/RODULFO-FRANCO/FrancosCorporation)](https://github.com/RODULFO-FRANCO/FrancosCorporation)
```

### 3. **awesome-repo-stats** (Dashboard Completo)

```markdown
[![Awesome Repo Stats](https://awesome-repo-stats.vercel.app/api?username=RODULFO-FRANCO&repo=FrancosCorporation)](https://awesome-repo-stats.vercel.app/)
```

## 📝 Checklist de Implementação

- [ ] Configurar `.readmestatsrc.json`
- [ ] Ativar workflow `readme-stats.yml`
- [ ] Testar com parâmetros personalizados
- [ ] Adicionar badges no README.md
- [ ] Personalizar tema e idioma
- [ ] Configurar repositórios privados (se necessário)

## 🔐 Segurança

### ⚠️ Importante:

1. **NÃO use tokens pessoais** - Use apenas `GITHUB_TOKEN` do workflow
2. **Repositórios privados** - Configure `count_private: true` com cuidado
3. **API Rate Limits** - GitHub Actions tem limite de 5000 requisições/dia

### ✅ Melhores Práticas:

- Use workflows agendados (não rodam a cada commit)
- Limpe arquivos temporários após execução
- Monitore uso da API no dashboard do GitHub

## 📚 Recursos Adicionais

- [GitHub Readme Stats Docs](https://github.com/anuraghazra/github-readme-stats)
- [Shields.io Badges](https://shields.io/)
- [Contrib.rocks](https://contrib.rocks/)
- [Awesome GitHub README](https://github.com/sindresorhus/awesome-github-readme)

## 🎯 Próximos Passos

1. **Teste o workflow** - Dispare manualmente na UI do Actions
2. **Verifique os logs** - Monitore execuções no GitHub Actions
3. **Personalize** - Ajuste temas e parâmetros conforme necessário
4. **Monitore** - Verifique se as estatísticas estão atualizando

---

<div align="center">

### 🚀 Pronto para transformar seu README!

> *"Dados em tempo real = Engajamento máximo"*

</div>
