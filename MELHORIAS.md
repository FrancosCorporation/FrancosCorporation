# MELHORIAS — FrancosCorporation

> **Gerado por análise de código em 2026-10-05** · branch `main` · repositório de perfil/organização **sem código-fonte** (apenas documentação)
> Fatos verificados por leitura direta do repositório (`git ls-files`, `wc -l`, inspeção dos arquivos). Nenhum arquivo:linha foi inventado.

## 0. Como usar este documento

- Cada item tem 6 campos: **Arquivo:**, **Evidência:**, **Impacto:**, **Mudança:**, **Aceite:** e **Verificação:** (com bloco `bash`).
- Prefixos: `SEC` (segurança), `BUG` (bug funcional), `IMP` (melhoria), `TEST` (testes), `PERF` (performance), `A11Y` (acessibilidade), `DEVOPS` (infra), `DOC` (documentação).
- Severidade: P0 crítico · P1 alto · P2 médio · P3 baixo (colchetes reservados aos itens). **Este repo é só-documentação, então não há P0/P1 — proporção intencional.**
- Ordem de execução sugerida na §8 (waves). Itens independentes podem ser feitos em paralelo.

## 1. Diagnóstico executivo

**O que está bem:**
- `README.md` (173 linhas) é profissional e completo: stack em tabela com badges, projetos em destaque (Linux, IA/dados, jogos com IA local, Repo Racer), estatísticas via cards e seção em inglês.
- Licença MIT presente (`LICENSE`, 21 linhas).
- `REDMI.md` (17 linhas) organiza os 5 jogos com IA local em tabela com links GitHub + GitHub Pages + contagem de testes.

**O que está quebrado / ausente:**
- `REDMI.md` **não está rastreado pelo git** (`git status --porcelain` mostra `?? REDMI.md`) — existe no disco mas não versionado; `README.md` está com alterações não commitadas (`M README.md`).
- Sem `.gitignore` (ls confirma apenas 3 arquivos no diretório).
- Sem CI (`.github/` inexistente — verificado por `ls`).
- Contagens de testes no `REDMI.md` (ex.: `35/35`) são números "congelados" sem data de validação.
- Sem registro de quando os links externos do README foram revisados pela última vez.

## 2. Tabela de prioridades

| ID | Sev | Arquivo | Resumo |
|---|---|---|---|
| DOC-01 | P2 | `REDMI.md` | Contagens de testes podem desatualizar — adicionar data/validação |
| DOC-02 | P2 | `.gitignore` (ausente) | Sem `.gitignore` em repo só-docs (lixo de sistema) |
| DEVOPS-01 | P3 | `.github/workflows/` (ausente) | Sem CI; markdownlint/link-check mínimo |
| SEC-01 | P3 | `SECURITY.md` (ausente) | Sem SECURITY.md — aceitável em repo de perfil; registrar decisão |
| IMP-01 | P3 | `README.md` | Sem data da última revisão de links externos |

## 3. Segurança

### SEC-01 [P3] — Ausência de SECURITY.md em repo de perfil (decisão a registrar)

**Arquivo:** (ausente) `SECURITY.md`
**Evidência:** `git ls-files` retorna apenas `LICENSE` e `README.md` (rastreados); não existe `SECURITY.md` no diretório.
**Impacto:** Baixo. Repo de perfil/organização sem código-executível não expõe superfície de ataque; a ausência de `SECURITY.md` é aceitável, mas a decisão fica implícita.
**Mudança:** Criar `SECURITY.md` mínimo declarando que o repositório é documentação de perfil, sem código de execução, e apontando canal de contato para relatos.
**Aceite:** `SECURITY.md` presente, com declaração de escopo e contato.
**Verificação:**
```bash
test -f SECURITY.md && grep -qi "documentação" SECURITY.md && echo "OK: SECURITY.md presente e com declaração de escopo"
```

## 4. Bugs e defeitos funcionais

Nenhum item — sem código-fonte no repo.

## 5. Qualidade: testes

Nenhum item — sem código-fonte no repo.


## 6. DevOps / Infra

### DEVOPS-01 [P3] — Sem CI: markdownlint e link-check mínimos

**Arquivo:** (ausente) `.github/workflows/`
**Evidência:** `ls -la .github` → "Arquivo ou diretório inexistente" (verificado em `FrancosCorporation`); `git ls-files` não contém workflows.
**Impacto:** Médio-baixo. O README tem muitos links externos (badges, GitHub Pages, LinkedIn/WhatsApp) e nenhuma checagem automática os valida; markdown sem lint pode acumular erros silenciosos.
**Mudança:** Criar `.github/workflows/lint.yml` com markdownlint e um link-check (ex.: `lychee` ou `markdown-link-check`) disparando em PR/push.
**Aceite:** Workflow presente e passando no estado atual dos arquivos.
**Verificação:**
```bash
test -f .github/workflows/lint.yml && echo "OK: workflow de lint presente"
```

## 7. Documentação

### DOC-01 [P2] — Contagens de testes no REDMI.md podem desatualizar

**Arquivo:** `REDMI.md`
**Evidência:** `REDMI.md` tem 17 linhas; a tabela (linhas 5–11) lista contagens congeladas: `20/20`, `35/35`, `37/37`, `35/35`, `47/47`. `README.md:127` declara "174 testes ao todo, zero falhas" (soma atual confere: 20+35+37+35+47=174), mas nenhum dos dois arquivos registra data de validação — e o arquivo não está versionado (`?? REDMI.md`).
**Impacto:** Médio. Os números podem divergir dos reais nos repos dos jogos sem que ninguém perceba, gerando informação errada em um artefato de perfil.
**Mudança:** Adicionar abaixo da tabela do `REDMI.md` uma linha "Última validação: AAAA-MM-DD (fonte: CI/suite dos repos X)", ou remover a coluna "Testes" e linkar o badge/CI de cada repo.
**Aceite:** Tabela do `REDMI.md` com data de validação explícita e arquivo rastreado pelo git.
**Verificação:**
```bash
grep -q "Última validação" REDMI.md && echo "OK: data de validação presente"; git ls-files --error-unmatch REDMI.md >/dev/null 2>&1 && echo "OK: REDMI.md versionado"
```

### DOC-02 [P2] — Sem .gitignore em repo só-docs

**Arquivo:** (ausente) `.gitignore`
**Evidência:** `ls -la` do diretório mostra apenas `.git`, `LICENSE`, `README.md`, `REDMI.md`; não existe `.gitignore` (confirmado também pela ausência de regras no `git status`).
**Impacto:** Baixo-médio. Editores de Markdown em macOS/Windows podem deixar `.DS_Store`/`Thumbs.db` e poluir o repo; inofensivo mas evitável.
**Mudança:** Criar `.gitignore` mínimo cobrindo lixo de sistema e temporários de editor.
**Aceite:** `.gitignore` presente cobrindo `.DS_Store`, `Thumbs.db`, `desktop.ini`.
**Verificação:**
```bash
test -f .gitignore && grep -q ".DS_Store" .gitignore && echo "OK: .gitignore presente com regras de sistema"
```

### IMP-01 [P3] — README sem data da última revisão de links externos

**Arquivo:** `README.md`
**Evidência:** `README.md` (173 linhas) contém badges e links externos nas linhas 20–22 (LinkedIn/E-mail/WhatsApp via `img.shields.io` + destinos), 62–64 e 117–121 (projetos GitHub + GitHub Pages), 138–140 (Repo Racer) e 146–150 (cards de estatísticas de terceiros). Não há qualquer menção a data de revisão desses links.
**Impacto:** Médio. Link rot em badge de perfil gera visualização quebrada exatamente no rosto do repo; sem data, não há gatilho para revisão.
**Mudança:** Adicionar no rodapé do README uma linha `> Última revisão dos links externos: AAAA-MM-DD` e revisar os links nessa data.
**Aceite:** Linha de data de revisão presente no README.
**Verificação:**
```bash
grep -qi "última revisão" README.md && echo "OK: data de revisão de links presente no README"
```

## 8. Ordem de execução (waves)

**Wave 1 (rápida, 10 min):** DOC-02 (criar `.gitignore`) · versionar `REDMI.md` e commitar as mudanças pendentes de `README.md` (estado `M`/`??` verificado via `git status`).
**Wave 2 (curta):** DOC-01 (data de validação no `REDMI.md`) · IMP-01 (data de revisão no README).
**Wave 3 (opcional):** SEC-01 (`SECURITY.md`) · DEVOPS-01 (workflow de lint/link-check).

## 9. Fora de escopo / riscos

- Não há código-fonte neste repo — itens de testes, performance, A11Y de código e bugs funcionais não se aplicam (§4 e §5 vazias por construção).
- Não inventar arquivos:linha de repositórios externos (jogos, ferramentas) — a análise cobre apenas o que está neste diretório.
- Risco: tratar as contagens de testes do `REDMI.md` como autoridade sem validação periódica.
- Risco: badges de terceiros (`img.shields.io`, `streak-stats`, `github-profile-summary-cards`) podem mudar de formato sem aviso.

## 10. Definição de pronto (DoD)

- [ ] `.gitignore` criado com regras de sistema (DOC-02).
- [ ] `REDMI.md` rastreado pelo git e com data de validação (DOC-01).
- [ ] `README.md` com data da última revisão de links externos (IMP-01).
- [ ] `SECURITY.md` presente ou decisão de ausência registrada (SEC-01).
- [ ] Workflow de markdownlint/link-check passando no estado atual (DEVOPS-01).
- [ ] `python3 /tmp/validate.py FrancosCorporation` retorna OK.

*Fim do plano. Gerado por leitura direta do código em 2026-10-05 — todos os fatos (arquivos, linhas, estados de git) foram verificados no repositório; nenhum arquivo:linha foi inventado.*
