# JOVI Academy Mode — Sprint 4 | FIAP

**Projeto da Challenge JOVI:** a câmera acadêmica que **traduz, dubla e organiza** materiais de estudo para reduzir barreiras linguísticas entre universitários brasileiros. Esta entrega é uma **evolução direta da Landing Page da Sprint 3**, com os componentes originais de Hero, Solução, Público-Alvo, Galeria, Equipe, Contato e Footer preservados e novas funções em React, alinhadas à apresentação JOVI e ao fluxograma.

> **Origem do código:** a landing anterior foi recuperada de `Sprint.3---Web-Development-main.zip`, fornecido posteriormente. Os arquivos originais das seções foram migrados para `components/sprint3/`; o CSS da Sprint 3 ficou em `app/sprint3.css`. Mantemos o conceito, estrutura, galeria e formulário de contato, adicionando o Academy Mode e o Cofre. Ao publicar, use preferencialmente **o repositório Git original da Sprint 3** para demonstrar a continuidade histórica.

## Tecnologias utilizadas

- **React 19:** componentes, props, hooks nativos (`useState`, `useEffect`, `useMemo`, `useCallback`) e hooks customizados.
- **Next.js 16.3.3 (App Router):** React, rotas (`/`, `/academy`, `/login`, `/cofre`), Proxy para rota privada e API Routes.
- **Tailwind CSS 4:** layout responsivo e personalização visual, aplicado via `@import "tailwindcss"` e classes utilitárias.
- **JavaScript**, **HTML semântico** e CSS. A landing da Sprint 3 foi originalmente criada em TSX e seus componentes foram migrados para JSX para integrar à base desta revisão.
- **CSS da Sprint 3 mantido** para preservar as seções, complementado com utilitários Tailwind CSS na evolução da Sprint 4.
- **API mockada interna:** `GET/POST /api/library` e `GET/POST/DELETE /api/auth`.
- **localStorage:** dados da biblioteca persistentes no navegador usado para demonstração.
- **Git** para repositório e **Vercel** para publicação.

**Identidade visual:** preto/grafite `#1A1A1A`, branco e violeta JOVI `#7157FC` conforme a apresentação, com verde-menta `#B7EFCE` e amarelo-claro `#FFF1A8` inspirados nas etapas do fluxograma. A interface foi construída para desktop, tablet e celular.

## Instalação em outra máquina

**Pré-requisitos:** Node.js 20.9+ (recomendado Node.js 22 LTS), npm e acesso à internet para o primeiro `npm install`.

1. Extraia o arquivo ZIP.
2. Abra um terminal na pasta **`jovi-sprint4`**, que contém o arquivo `package.json`.
3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm run dev
```

5. Acesse **http://localhost:3000**.

Para simular o ambiente de produção:

```bash
npm run build
npm run start
```

Para análise do código e verificação de integridade da estrutura:

```bash
npm run lint
npm run check
```

**Não há um servidor de back-end separado.** O próprio Next.js fornece os endpoints em `app/api/*` quando `npm run dev` ou `npm run start` está rodando.

## Navegação e funcionalidades

| Rota | Acesso | Descrição |
| --- | --- | --- |
| `/` | Público | Landing Page original da Sprint 3: Hero, Solução, Público-Alvo, Galeria, Equipe e Contato (com protocolo local), integrada às novas funcionalidades. |
| `/academy` | Público | Simulador de Foto Acadêmica ou Vídeo Dublado, pré-visualização local e 4 etapas do fluxo. |
| `/login` | Público | Login demonstrativo. |
| `/cofre` | Privado | Biblioteca com busca, filtros, tags, pastas e criação, edição e exclusão de materiais. |

**Dados de teste para o professor:**

- **E-mail:** `aluno@jovi.com`
- **Senha:** `jovi2026`

Entre em `/login` ou tente acessar `/cofre` (o sistema redireciona ao login). Para encerrar a sessão, clique em **Sair da conta** no Cofre. A sessão demonstrativa usa cookie `HttpOnly`, com duração de 8 horas. **É um acesso acadêmico de demonstração, não um sistema de autenticação seguro para produção.**

### API consumida

- `GET /api/auth`: consulta o estado do login.
- `POST /api/auth`: autentica com as credenciais de demonstração.
- `DELETE /api/auth`: faz logout.
- `GET /api/library`: retorna três materiais de exemplo, requer login.
- `POST /api/library`: valida e devolve o novo material, requer login.

Os materiais são carregados com `fetch()` pelo hook **`useLibrary`**. Os cadastros/edições/exclusões são armazenados em `localStorage` **deste navegador** (apenas para o protótipo), não em banco de dados. É possível testar os recursos sem contas externas e sem configurar um servidor adicional. As informações não são sincronizadas entre máquinas ou navegadores.

### Componentização e hooks

- `components/Header.js`: cabeçalho da Sprint 3 adaptado às novas rotas, com menu mobile.
- `components/sprint3/*`: seções originais reutilizadas da Sprint 3, preservando a landing completa.
- `app/sprint3.css`: estilos da Sprint 3 com cores harmonizadas à apresentação JOVI.
- `components/FeatureCard.js`: componente com `props` para as três funcionalidades.
- `hooks/useAuth.js`: leitura da sessão, deixando a lógica separada da página.
- `hooks/useLibrary.js`: consumo de API, persistência local, CRUD e atualização de estado.
- `hooks/usePreviewFile.js`: pré-visualização de foto/vídeo local com limpeza do URL temporário.
- `proxy.js`: proteção da rota `/cofre` no Next.js 16.

### O que é simulado e o que ainda não foi integrado

A seleção e pré-visualização de imagens e vídeos **funciona localmente**. O fluxo de captura, tradução, legendagem e dublagem é uma **demonstração interativa**, e não executa OCR, tradução automática nem geração real de áudio. ML Kit, Gemini Nano e Google Cloud Text-to-Speech são as tecnologias propostas na apresentação para uma implementação futura. Não são anunciadas como serviços ativos neste protótipo.

## Como foi utilizada a IA

A Inteligência Artificial foi utilizada **no processo de desenvolvimento** como apoio à revisão do código de origem, identificação de requisitos ausentes, proposta e refatoração de componentes React, implementação dos hooks, organização da API mockada, adaptação da identidade visual e redação da documentação. O grupo deve revisar e compreender o código antes de entregar. A IA faz parte também da **proposta de produto JOVI** (tradução contextual e dublagem), mas as integrações com modelos e APIs reais **não estão habilitadas** nesta entrega demonstrativa.

## Repositório Git e deploy Vercel

**Repositório Git:** `[PREENCHER COM A URL REAL DO REPOSITÓRIO]`

**Deploy Vercel:** `[PREENCHER COM A URL REAL DO SITE PUBLICADO]`

Para publicar:
1. Crie um repositório GitHub e envie **somente o código-fonte** (não suba `node_modules` ou `.next`).
2. Entre em https://vercel.com/new, importe o repositório e escolha Next.js.
3. Se o repositório tiver a pasta `jovi-sprint4` na raiz, configure essa pasta em **Root Directory**. Se os arquivos do projeto estiverem na raiz do repositório, deixe como padrão.
4. Publique, teste `/`, `/academy`, `/login` e `/cofre` e cole a URL acima.
5. Inclua no portal da FIAP **os links do Git e da Vercel** junto com o único ZIP de entrega.

## Entrega

O ZIP deve conter a pasta `jovi-sprint4` com **todo o código-fonte**, `README.md`, `INTEGRANTES.TXT`, arquivos de configuração e recursos de `public/`. A pasta `node_modules` **não deve** estar incluída. O professor poderá reproduzir via `npm install` e `npm run dev`.

⚠️ **Antes de enviar:** confira os nomes completos e RMs recuperados do arquivo de integrantes da Sprint 3. Preencha os links reais do GitHub e da Vercel acima. Somente um aluno deverá fazer o envio. O preenchimento é necessário para cumprir o enunciado da Sprint 4.

## Continuidade com a Sprint 3

A Landing Page original tinha **Hero, Solução (4 recursos: documentos, fotos, vídeos, Cofre), Público-Alvo, Galeria, Equipe, Contato e Footer**. Todas essas seções foram preservadas. O formulário de contato mantém os protocolos e o armazenamento de mensagens em `localStorage`, como ocorria na Sprint 3 (não faz envio real de e-mail).

A Sprint 4 adiciona o bloco de **Academy Mode** à landing, as rotas públicas `/academy` e `/login`, a rota privada `/cofre`, os hooks customizados e a API mockada. Foi mantida a proposta de **tradução de documentos** do trabalho anterior como conceito da landing; o fluxo interativo de processamento implementa apenas fotos e vídeos, de acordo com a proposta da câmera na apresentação.

O código original tinha duas estruturas Next.js no mesmo ZIP (uma na raiz e outra em `jovi-academy/`), além de marcadores de conflito no README. Nesta entrega há apenas **uma aplicação Next.js**, sem diretórios duplicados, usando a estrutura unificada.
