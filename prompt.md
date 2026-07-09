Atue como um Especialista em DevOps e Automação de GitHub. Quero que meu README.md seja transformado em um dashboard dinâmico/interativo.

Siga estas instruções técnicas para configurar o sistema:

1. ESTRUTURA DA ACTION:
   - Crie o diretório `.github/workflows/` (caso não exista).
   - Crie um arquivo `update-readme.yml` que execute uma tarefa programada (cron) diariamente ou após cada push.
   - O script deve ler o status do meu projeto/servidor e atualizar o README.md automaticamente.

2. LOGIC DE "JOGO" / MENU:
   - Adicione no README um "Menu de Navegação" usando blocos de código (code blocks) para simular um console de terminal. 
   - Utilize Placeholders (ex: ``) no README para que o script saiba exatamente onde inserir os dados dinâmicos (status do servidor, contagem de acessos, ou badges de tecnologia).

3. INTEGRAÇÃO COM SERVIDOR:
   - Configure o script para fazer uma requisição (fetch) à minha API (https://francoscorporation.ddns.net) e exibir no README se o sistema está "Online" ou "Offline".

4. EXECUÇÃO:
   - Gere o código do `.yml` para a Action.
   - Gere o código do `README.md` com a estrutura de menu interativo (usando Markdown e links internos).
   - Explique onde devo colocar esses arquivos no meu repositório para que o GitHub reconheça o processo.
Atue como um Engenheiro de GitHub especializado em Gamificação de Repositórios. Quero transformar o meu README.md em um portal interativo/dashboard gamificado, usando como referência o repositório "Awesome GitHub Profile README" (https://github.com/abhisheknaiidu/awesome-github-profile-readme).

Sua tarefa é implementar a estrutura dinâmica:

1. EFEITOS E GADGETS:
   - Adicione o componente de "Typing Effect" para uma saudação personalizada.
   - Adicione os cards do "github-readme-stats" para mostrar minhas estatísticas e as linguagens que mais uso.
   - Integre o "Activity Graph" para dar o visual de terminal/dashboard vivo.

2. CONFIGURAÇÃO DO "CONSOLE":
   - Crie um layout visual dentro do Markdown usando blocos de código e tabelas para simular um "Menu de Jogo" ou "Terminal de Sistema".
   - Use emojis e arte ASCII para organizar as seções (ex: [PROJECTS], [STATUS], [CONTACT]).

3. AUTOMAÇÃO (Obrigatório):
   - Se houver necessidade de scripts, crie um arquivo em .github/workflows/ para que o README seja atualizado periodicamente. 
   - Garanta que o arquivo contenha os comentários de marcação "" e "" para que as ferramentas funcionem corretamente.

4. EXECUÇÃO:
   - Analise meu README atual e substitua o conteúdo estático por essa nova estrutura dinâmica.
   - Se faltar alguma configuração no projeto para que esses links funcionem, descreva o que preciso habilitar nas configurações do repositório (ex: GitHub Pages ou permissões de Actions).

Quero um visual que remeta a um sistema de "Terminal de Corporação" (francos-corp style).

1. A estrutura que o Roo Code deve criar para você:
O Roo deve gerar três arquivos principais. Se ele não fizer isso, peça especificamente:

.github/workflows/update-readme.yml: É o "motor". Ele diz ao GitHub: "Todo dia à meia-noite, rode o script de atualização".

scripts/update-readme.js: É o "cérebro". É o código Node.js que faz o fetch da sua API (https://francoscorporation.ddns.net/api/status), processa o status e troca o texto dentro do seu README.md.

README.md: O arquivo principal com as marcas de controle (os ``) que o script usa para saber onde mexer.

2. O seu papel na "Gamificação" (O toque final):
Para ficar com o visual de "Terminal de Corporação" que você pediu, assim que o Roo criar o arquivo, abra o seu README.md e, se não estiver do seu agrado, peça para ele:

"Roo, adicione arte ASCII no topo do README representando um logo de 'FrancosCorp' e use blocos de código para formatar o menu de navegação, como se fosse um console de comando onde eu posso escolher entre [PROJETOS], [STATUS DO SISTEMA] e [CONTATO]."

3. Checklist de Permissões (Crítico!)
Para que o script do Roo realmente consiga salvar as alterações no seu README.md automaticamente, ele precisa de permissão de escrita. Se a Action falhar depois de pronta, é porque falta essa permissão.

Peça para ele garantir o seguinte no arquivo .yml:

YAML
permissions:
  contents: write # Isso é obrigatório para o robô salvar o README
Sugestão de próximo passo:

Já que você está no VS Code agora:

Responda ao Roo com o nome do repositório (francoscorporation/francos-corporation).

Quando ele perguntar "Posso criar o arquivo tal?", clique em "Approve".

Se ele rodar o script e der erro de novo, não tente corrigir manualmente. Copie e cole o erro que aparecer no terminal e mande aqui para mim ou para o próprio Roo, dizendo: "O comando falhou com o erro X, como corrigir?".
