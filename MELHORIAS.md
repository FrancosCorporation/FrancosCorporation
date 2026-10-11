# MELHORIAS — FrancosCorporation

> **Gerado por análise de código em 2026-10-05** · branch `main` · repositório de perfil/organização **sem código-fonte** (apenas documentação)
> Fatos verificados por leitura direta do repositório (`git ls-files`, `wc -l`, inspeção dos arquivos). Nenhum arquivo:linha foi inventado.

## Estado da execução — 2026-10-11

- `DOC-01`, `DOC-02`, `DOC-03`, `IMP-01` e `SEC-01` implementados, incluindo a preservação e atualização da nova seção de jogos que já estava no README e o versionamento do `REDMI.md` preexistente.
- As contagens de testes foram retiradas do catálogo; cada jogo agora aponta para a aba GitHub Actions do repositório.
- `DEVOPS-01`: markdownlint e link-check configurados com permissão `contents: read`; a execução remota `38169778934` passou no commit `64bd39a`, incluindo os dois links novos.
- Links GitHub revisados; as páginas publicadas foram adicionadas ao link-check. Não afirmo que estão acessíveis antes da execução desse workflow.
- Corrigido o stack de `api_mongodb_query_money` para Node.js/MongoDB e vinculados os dois projetos públicos que estavam sem link no catálogo.

## 0. Como usar este documento

- Cada item tem 6 campos: **Arquivo:**, **Evidência:**, **Impacto:**, **Mudança:**, **Aceite:** e **Verificação:** (com bloco `bash`).
- Prefixos: `SEC` (segurança), `BUG` (bug funcional), `IMP` (melhoria), `TEST` (testes), `PERF` (performance), `A11Y` (acessibilidade), `DEVOPS` (infra), `DOC` (documentação).
- Severidade: P0 crítico · P1 alto · P2 médio · P3 baixo (colchetes reservados aos itens). **Este repo é só-documentação, então não há P0/P1 — proporção intencional.**
- Ordem de execução sugerida na §8 (waves). Itens independentes podem ser feitos em paralelo.

## 1. Diagnóstico executivo

**O que está bem:**
- `README.md` é profissional e completo: stack em tabela com badges, projetos em destaque (Linux, IA/dados, jogos com IA local, Repo Racer), estatísticas via cards e seção em inglês.
- Licença MIT presente (`LICENSE`, 21 linhas).
- `REDMI.md` organiza os 5 jogos com IA local em tabela com links GitHub, GitHub Pages e abas GitHub Actions.

**O que está quebrado / ausente:**
- `REDMI.md` estava sem rastreamento e `README.md` tinha a nova seção de jogos ainda não commitada; ambos são alterações preexistentes desta sessão e foram preservados.
- Sem `.gitignore` (ls confirma apenas 3 arquivos no diretório).
- Sem CI (`.github/` inexistente — verificado por `ls`).
- As contagens de testes no `REDMI.md` eram números "congelados" sem data de validação.
- Sem registro de quando os links externos do README foram revisados pela última vez.

## 2. Tabela de prioridades

| ID | Sev | Arquivo | Resumo |
|---|---|---|---|
| DOC-01 | P2 | `REDMI.md` | Contagens de testes podem desatualizar — adicionar data/validação |
| DOC-02 | P2 | `.gitignore` (ausente) | Sem `.gitignore` em repo só-docs (lixo de sistema) |
| DOC-03 | P2 | `README.md` | Stack de API desatualizada e dois projetos públicos sem link |
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
**Mudança:** Remover a coluna com contagens históricas e incluir links às abas GitHub Actions de cada repositório, além de uma nota datada sobre o catálogo.
**Aceite:** A tabela do `REDMI.md` não replica contagens de testes, aponta para as abas Actions e o arquivo fica rastreado pelo git.
**Verificação:**
```bash
! rg -q '\b[0-9]+/[0-9]+\b' REDMI.md && test "$(rg -o 'github\.com/FrancosCorporation/[^ )]+/actions' REDMI.md | wc -l)" -eq 5 && echo "OK: sem contagens fixas e com cinco links Actions"; git ls-files --error-unmatch REDMI.md >/dev/null 2>&1 && echo "OK: REDMI.md versionado após o commit"
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

### DOC-03 [P2] — Catálogo com stack incorreta e projetos públicos sem link

**Arquivo:** `README.md`, tabela "Web, APIs e produtos".
**Evidência:** o projeto `api_mongodb_query_money` documenta sua implementação ativa como Node.js/Express/Mongoose, mas o perfil a listava como Java; `doben_eccomerce_store` e `recruiters-apllication-example` são repositórios públicos, porém apareciam como texto sem link.
**Impacto:** visitantes recebem uma informação errada sobre a stack e não conseguem abrir dois projetos públicos diretamente pelo perfil.
**Mudança:** corrigir o stack para Node.js/MongoDB e adicionar os links GitHub dos dois repositórios.
**Aceite:** a tabela reflete a stack ativa e os três nomes abrem os repositórios correspondentes.
**Verificação:** revisar a linha do README e a execução do link-check do workflow.

## 8. Ordem de execução (waves)

**Wave 1 (rápida):** DOC-02 (`.gitignore`) · versionar as mudanças preexistentes em `REDMI.md` e `README.md`. **Concluída.**
**Wave 2 (curta):** DOC-01 (trocar contagens fixas por links às abas Actions) · IMP-01 (data de revisão no README). **Concluída.**
**Wave 3 (opcional):** SEC-01 (`SECURITY.md`) · DEVOPS-01 (workflow de lint/link-check). **Implementada; CI não executada.**

## 9. Fora de escopo / riscos

- Não há código-fonte neste repo — itens de testes, performance, A11Y de código e bugs funcionais não se aplicam (§4 e §5 vazias por construção).
- Não inventar arquivos:linha de repositórios externos (jogos, ferramentas) — a análise cobre apenas o que está neste diretório.
- As suítes e automações podem mudar; o catálogo aponta para a aba Actions de cada jogo em vez de copiar números de execuções anteriores.
- Risco: badges de terceiros (`img.shields.io`, `streak-stats`, `github-profile-summary-cards`) podem mudar de formato sem aviso.

## 10. Definição de pronto (DoD)

- [x] `.gitignore` criado com regras de sistema (DOC-02).
- [x] `REDMI.md` rastreado, sem contagens fixas e com links às abas Actions por projeto (DOC-01).
- [x] `README.md` com data da revisão do inventário de links externos (IMP-01).
- [x] `SECURITY.md` descreve escopo e contato para relatos (SEC-01).
- [x] Workflow de markdownlint/link-check configurado em `push` e `pull_request` para `main` (DEVOPS-01).
- [x] CI de markdownlint/link-check passou no commit `64bd39a` (execução `38169778934`).
- [ ] `python3 /tmp/validate.py FrancosCorporation` não foi executado; não executei testes.

*Fim do plano. Gerado por leitura direta do código em 2026-10-05 — todos os fatos (arquivos, linhas, estados de git) foram verificados no repositório; nenhum arquivo:linha foi inventado.*
