# 🤝 Contribuindo com o FrancosCorporation

Bem-vindo! Este documento explica como contribuir para este repositório.

## 📋 Como Contribuir

### 1. **Bug Reports** 🐛

Encontrou um problema? Siga estes passos:

```markdown
## Template de Bug Report

- **Descrição:** Descreva o problema claramente
- **Passos para reproduzir:**
  1. Passo 1
  2. Passo 2
  3. ...
- **Expectativa:** O que deveria acontecer
- **Resultado real:** O que aconteceu
- **Ambiente:** Sistema operacional, navegador, versão
```

### 2. **Feature Requests** 💡

Tem uma ideia? Abra um issue primeiro para discussão!

```markdown
## Template de Feature Request

- **Descrição da feature:** O que você gostaria de ver
- **Motivação:** Por que isso seria útil
- **Exemplos:** Como isso funcionaria na prática
- **Alternativas consideradas:** Outras soluções pensadas
```

### 3. **Pull Requests** 🔧

Quer enviar código? Siga o fluxo:

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Faça suas alterações
4. Commit com mensagem clara
5. Push para sua branch
6. Abra um Pull Request

```bash
# Exemplo de commit message
git commit -m "feat: adiciona nova seção ao README"
```

### 4. **Documentação** 📚

Melhore a documentação!

- Corrija erros de português
- Adicione exemplos práticos
- Melhore screenshots e diagramas
- Atualize links quebrados

## 🎯 Diretrizes de Código

### Conventional Commits

Use este formato para commits:

```
<type>(<scope>): <description>

[optional body]

<footer>
Closes #123
```

**Types:**
- `feat:` - Nova feature
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação (espaços, pontuação)
- `refactor:` - Refatoração sem mudança de comportamento
- `test:` - Adição/correção de testes
- `chore:` - Tarefas de manutenção

### Exemplos:

```bash
git commit -m "feat(readme): adiciona seção de métricas vivas"
git commit -m "fix(icons): corrige caminho dos ícones do WhatsApp"
git commit -m "docs(workflow): atualiza documentação do GitHub Actions"
```

## 📂 Estrutura do Repositório

```
FrancosCorporation/
├── README.md                    # Portal gamificado principal
├── .github/
│   ├── workflows/               # GitHub Actions
│   │   ├── update-readme.yml   # Atualização automática de métricas
│   │   └── readme-stats.yml     # Geração de stats visuais
│   └── README-STATS.md          # Documentação de integração
├── Icons/                       # Ícones das tecnologias
│   ├── *.png                   # Ícones individuais
│   └── Projects/               # Ícones de projetos
└── [outros arquivos]
```

## 🚀 Workflow de Atualização Automática

O README é atualizado automaticamente:

- **Frequência:** Toda segunda-feira às 21h (horário de Brasília)
- **Disparo manual:** Clique em "Run workflow" na aba Actions
- **Tipos de atualização:**
  - `all` - Atualiza tudo
  - `stats` - Apenas métricas visuais
  - `commits` - Contagem de commits recentes

## 📊 Métricas Monitoradas

| Métrica | Frequência | Fonte |
|---------|------------|-------|
| Commits (30d) | Diária | Git API |
| Contribuições | Semanal | GitHub API |
| Top Languages | Diária | Git API |
| Issues/PRs | Diária | GitHub API |

## 🎨 Estilo Visual

### Cores Recomendadas

```css
/* Paleta do FrancosCorporation */
:root {
  --primary: #0E8A6B;      /* Verde principal */
  --secondary: #1F2937;    /* Cinza escuro */
  --accent: #FF6B35;       /* Laranja destaque */
  --success: #10B981;      /* Verde sucesso */
  --warning: #F59E0B;      /* Amarelo aviso */
  --danger: #EF4444;       /* Vermelho erro */
}
```

### Badges Recomendadas

Use badges para status de projetos:

```markdown
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()
```

## 🔍 Revisão de Pull Requests

### Checklist do Reviewer:

- [ ] Código segue as diretrizes
- [ ] Commits têm mensagens claras
- [ ] Testes estão atualizados (se aplicável)
- [ ] Documentação está correta
- [ ] Não há regressões
- [ ] Estilo de código consistente

## 📞 Contato

Dúvidas? Entre em contato:

- 💬 **WhatsApp:** +55 62 98583-5588
- 📧 **Email:** rodolfofranco14@hotmail.com
- 🔗 **LinkedIn:** [Rodolfo Franco](https://www.linkedin.com/in/rodolfo-franco-26225549/)

## ⚖️ Código de Conduta

Seja respeitoso e construtivo em todas as contribuições.

### Princípios:

1. Seja acolhedor
2. Esteja aberto a opiniões diferentes
3. Reconheça contribuições alheias
4. Aceite críticas construtivas

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

<div align="center">

### 🎮 FrancosCorporation - Code is Poetry

> *"Contribua, aprenda e cresça juntos!"*

</div>
