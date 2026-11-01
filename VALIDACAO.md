# Revisão comparativa Sprint 3 → Sprint 4

## Achados após receber o ZIP real da Sprint 3

- O ZIP `my-app.zip` **não continha** a landing da Sprint 3, mas o ZIP `Sprint.3---Web-Development-main.zip` contém a landing completa.
- A primeira versão da Sprint 4 tinha substituído a landing anterior por uma página nova; **isso era um risco para o critério de evolução do mesmo projeto**.
- A Sprint 3 já continha Hero, Solução (documentos, fotos, vídeos e Cofre), Público-Alvo, Galeria, Equipe, Contato e Footer, além de um formulário de contato com protocolo salvo no navegador.
- O ZIP Sprint 3 possuía **duas aplicações Next.js** (raiz e subpasta `jovi-academy`) e `README.md` com conflito de merge (`<<<<<<< HEAD`, `=======`, `>>>>>>>`), inadequados para a entrega.
- O arquivo `INTEGRANTES.txt` da Sprint 3 traz nomes e RMs; eles foram migrados, pendente conferência de nomes completos.
- A Sprint 3 usava uma paleta predominantemente azul; a apresentação JOVI enviada destaca violeta e preto. Os estilos da landing foram harmonizados com o material visual.

## Melhorias aplicadas na Sprint 4 revisada

- Restauradas todas as seções originais da landing da Sprint 3, preservando seu desenho e conteúdo.
- Mantido o formulário Contato com protocolo e armazenamento local; tratamento de dados locais corrompidos adicionado.
- Menu original adaptado para rotas do React/Next.js e âncoras na home.
- Integração das novas funcionalidades (Academy, Login e Cofre) sem apagar o trabalho anterior.
- Única aplicação Next.js, sem pastas de projetos duplicadas.
- INTEGRANTES.TXT recuperado da Sprint 3.
- README atualizado com o histórico de evolução e instruções de execução.

# Relatório técnico de revisão — JOVI Academy Mode | Sprint 4

## Diagnóstico do ZIP fornecido

- `my-app.zip` tinha apenas a página padrão **Create Next App** (sem landing JOVI real).
- `package.json` não incluía Tailwind CSS.
- Não existiam rotas de Academy Mode, login ou Cofre Acadêmico, nem API mockada, hooks customizados ou proteção de rotas.
- O `README.md` era o modelo do Next.js; `INTEGRANTES.TXT` não existia.
- O arquivo original continha `node_modules` (mais de 10.000 entradas), o que aumentava o tamanho do ZIP sem necessidade.

## Alterações realizadas

- Reconstrução da landing page JOVI baseada na apresentação acadêmica.
- Cores alinhadas às fontes: violeta `#7157FC`, preto `#1A1A1A`, branco, menta e amarelo de apoio.
- Tailwind CSS, componentes reutilizáveis, uso de props, hooks do React e hooks customizados.
- Responsividade: navegação móvel e grades que se reorganizam em desktop, tablet e celular.
- Rotas públicas e privada via Proxy Next.js 16; login demonstrativo.
- API mockada própria com exemplos e endpoint de cadastro.
- Cofre com cadastro, busca, filtros, pastas, tags, edição e exclusão em armazenamento local do navegador.
- Simulador de Foto Acadêmica e Vídeo Dublado com pré-visualização local (sem falso anúncio de integração de IA real).
- README com instalação, execução, tecnologias, uso de IA, credenciais e orientação de deploy.
- INTEGRANTES.TXT obrigatório, com dados recuperados da Sprint 3, sujeitos a conferência.

## Limites da revisão

- **Corrigido:** agora a entrega inclui os componentes da Sprint 3 fornecidos posteriormente.
- O site não foi publicado em GitHub/Vercel pela revisão. Os links reais devem ser incluídos pela equipe.
- Credenciais e proteção de sessão são **demonstrativas**, não apropriadas a dados reais de usuários.
- API mockada não utiliza banco de dados; novos materiais ficam no `localStorage` do navegador.
- O recurso de captura/IA é **simulado**; OCR, tradução, áudio neural e cofre nativo não foram integrados a APIs externas.
- Verificações finais de instalação/build/deploy são registradas separadamente conforme a disponibilidade de dependências no ambiente.

## Checklist de entrega

- [x] Estrutura React/Next.js com landing page JOVI.
- [x] Tailwind CSS declarado e aplicado.
- [x] Componentes, props, hooks nativos e customizados.
- [x] Rotas públicas e privada.
- [x] Consumo de API mockada.
- [x] Responsividade implementada com classes `sm:`, `md:`, `lg:` e navegação mobile.
- [x] Documentação e credenciais de demonstração.
- [x] INTEGRANTES.TXT incluído no projeto.
- [ ] Conferir a grafia oficial e completude dos nomes do arquivo INTEGRANTES.TXT.
- [ ] Publicar no GitHub.
- [ ] Publicar e conferir na Vercel.
- [ ] Atualizar README com URLs reais.

## Resultado dos testes nesta revisão (01/11/2026)

- **Análise sintática com Babel Parser:** 20 arquivos JavaScript/JSX analisados com parser TypeScript; **0 erros de sintaxe**.
- **Imports locais:** caminhos de arquivos verificados; **0 referências quebradas**.
- **Integridade:** configurações e documentação obrigatórias checadas.
- **Build de produção:** **não executado com sucesso neste ambiente**, pois as dependências do npm não estavam disponíveis para instalação. A tentativa offline retornou `ENOTCACHED` para `@tailwindcss/postcss`, e o comando `next build` não ficou disponível. Não existe evidência de compilação de produção ou deploy na Vercel neste ambiente.
- **Nota da comparação:** após a migração, o projeto preserva as seções originais e usa versões/dependências presentes no `package-lock.json` da Sprint 3.
- **Ação requerida:** em uma máquina com acesso ao npm, executar `npm install`, `npm run check`, `npm run lint`, `npm run build`, `npm run dev` e testar manualmente menu, upload, login, busca, cadastro, edição, exclusão, atualização da página e responsividade.
