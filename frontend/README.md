# 🏛️ Xixa 2 — Museu & Arquivo da Internet Brasileira

> *"E no fim, o plano do Não Salvo era salvar."*

O **Não Salvo** é uma plataforma colaborativa dedicada a catalogar, preservar e celebrar a história viva dos memes, virais e da cultura digital brasileira desde 2004 até a atualidade.

Este projeto nasceu da união da comunidade (comunidade XET, Cid Cidoso, moderadores e voluntários) para criar uma experiência rica que mistura acervo histórico, linha do tempo interativa e gamificação através de um álbum de figurinhas digital.

---

## 📌 Sumário
- [1. Visão Geral e Funcionalidades (MVP)](#1-visão-geral-e-funcionalidades-mvp)
- [2. Mapas e Diagramas Mermaid](#2-mapas-e-diagramas-mermaid)
  - [2.1. Mapa de Telas e Navegação](#21-mapa-de-telas-e-navegação)
  - [2.2. Arquitetura do Sistema e Infraestrutura](#22-arquitetura-do-sistema-e-infraestrutura)
  - [2.3. Fluxo de Submissão e Processamento de Mídia](#23-fluxo-de-submissão-e-processamento-de-mídia)
  - [2.4. Modelo de Dados (ER Diagram)](#24-modelo-de-dados-er-diagram)
- [3. Stack Tecnológica e Dimensionamento](#3-stack-tecnológica-e-dimensionamento)
- [4. Estrutura de Diretórios Recomendada](#4-estrutura-de-diretórios-recomendada)
- [5. Regras de Negócio e Curadoria](#5-regras-de-negócio-e-curadoria)
- [6. Referências de Design e Mockups](#6-referências-de-design-e-mockups)

---

## 1. Visão Geral e Funcionalidades (MVP)

### 🗓️ 1. Hoje na História da Internet ("Hoje há X anos")
- Compara a data atual (dia e mês) com os registros do acervo em anos anteriores.
- Apresenta carrossel com acontecimentos e memes que viralizaram exatamente na data ou no mesmo mês há 5, 10, 15 ou 20 anos atrás.
- Atalho direto para viajar no tempo até o ano específico.

### ⏱️ 2. Linha do Tempo Histórica (2004 - Presente)
- Navegação ano a ano com lema e resumo cultural de cada época (ex.: *2004: O ano do Orkut*, *2007: Tropa de Elite vaza*, *2012: O caos do Facebook e Gangnam Style*, *2014: O 7x1*).
- Grade de registros com filtros por categoria (Vídeos, Música, TV, Zoeira, GIFs, Fotos, Jogos, Política).
- Classificação por raridade cultural: *Clássico*, *Relíquia*, *Lendário* e *Mítico*.

### 🎞️ 3. Feed Multimídia & Baú do Usuário
- Feed vertical contínuo com reprodução otimizada de mídias (YouTube, TikTok, X/Twitter, Instagram, arquivos diretos WebM/MP4).
- Navegação rápida via teclado (`↑`/`↓` para navegar, tecla `S` para salvar no baú pessoal).
- Histórias de bastidores: campo *"Conta pra quem não viveu"* contextualizando a piada original.

### 🃏 4. Álbum de Figurinhas da Internet (Gamificação)
O álbum tem quatro áreas: **Minhas coleções** (barra lateral), **Fichário** (cartas da coleção, 6 por página com paginação), **Detalhe da carta** e **Disquetes**.

**11 coleções (195 cartas):**

| Coleção | Cartas | Moldura da arte |
|---|---|---|
| Fotolog Legends | 16 | Polaroid |
| Lendas do Orkut | 14 | Clássica |
| Expansão Orkut | 14 | Clássica |
| YouTube Clássico | 16 | Tira de filme |
| Memes Icônicos | 16 | Clássica |
| Plataformas Raiz | 20 | Tela de TV |
| Blogs & Épicos | 15 | Clássica |
| TV & Intervalo | 21 | Tela de TV |
| Hits da Internet | 24 | Tela de TV |
| Era do Zap | 22 | Tira de filme |
| Vídeos Curtos | 17 | Tira de filme |

**6 raridades**, cada uma com moldura própria e valores de XP e moedas (repetida vira moeda):

| Raridade | Cor | XP | Moedas (repetida) | Efeito visual |
|---|---|---|---|---|
| Comum | Cinza | 2 | 5 | Moldura de aço |
| Relevante | Verde | 4 | 10 | Moldura verde |
| Raro | Azul | 8 | 20 | Moldura azul |
| Relíquia | Roxo | 15 | 40 | Brilho reflexivo que segue o ponteiro |
| Lendário | Dourado | 30 | 80 | Brilho reflexivo + holográfico |
| Mítico | Vermelho | 60 | 150 | Brilho reflexivo + holográfico + moldura animada |

Cartas bloqueadas aparecem como silhueta com `???` até serem tiradas de um disquete.

**Disquetes (pacotes de 4 a 5 cartas):**

| Disquete | Cartas | Preço | Garantia |
|---|---|---|---|
| Diário | 4 | Grátis (1 por dia) | Relevante ou melhor |
| Boas-vindas | 5 | Grátis (uma vez) | Raro ou melhor |
| Semana do Orkut (evento) | 5 | 90 moedas | Raro ou melhor, chance dobrada de Lendário |
| Orkut, Fotolog, Viral, Web Raiz, Horário Nobre, Zap | 5 | 150 moedas | Relevante ou melhor |
| Ouro | 5 | 400 moedas | Sem comuns, Relíquia ou melhor |

- **Animação de abertura:** o disquete cai, treme e carrega, estoura com flash e faíscas na cor da melhor carta, e as cartas são distribuídas e viradas uma a uma (ou todas de uma vez em "Revelar todas"). Toque para pular. Respeita `prefers-reduced-motion`.
- **Reciclagem de Repetidas:** 5 cartas repetidas viram 1 disquete diário.
- **Sistema de Trocas (Trades):** mural e links diretos para propor trocas entre usuários (planejado para o backend).

### 🐱 5. Criador de Avatar (Gatopeixe) & Carteirinha de Membro
Construtor em quatro abas, com miniaturas renderizadas de cada opção:
1. **Pelo:** 10 cores de pelo (incluindo Tricolor e Cósmico), 5 padrões (tigrado, mármore, pintado, smoking, liso) e 5 cores de olhos.
2. **Acessórios:** óculos redondo, óculos escuro, monóculo, boné, gorro, fone, bandana e corrente. Um acessório por região (cabeça, olhos, pescoço).
3. **Roupa:** hoodie, camiseta, jaqueta jeans, moletom, bomber, camisa xadrez e regata.
4. **Fundo:** azul, roxo, rosa, verde-água, laranja, synthwave, galáxia e grade.

- Botão **Aleatório** sorteia todas as opções. O mesmo gato (SVG) é usado no ranking e no perfil.
- Carteirinha digital com Nick, ano em que começou a navegar na web, meme favorito e selo de membro fundador, disponível para download e compartilhamento em redes.

### 🏆 5.1. Ranking & Patentes
- **Pódio** com o 1º, 2º e 3º colocados (gato do usuário, patente e pontuação) e tabela completa abaixo.
- **Filtros:** XP geral, Envios aprovados e Cartas coletadas.
- **Patentes por nível:** Discado (1+), Banda larga (3+), Colaborador (5+), Moderador (10+), Dono de comunidade (15+) e Lenda da internet (20+).

### ☁️ 6. Submissão Aberta com Anti-Duplicação
- Envio de novos memes pela comunidade com detecção em tempo real de links e títulos já cadastrados.
- Fila de moderação para os guardiões do acervo (Cid, Sepp e equipe de curadores).
- Recompensa em XP (+50 XP por meme aprovado, +5 XP por expansão do álbum).

---

## 2. Mapas e Diagramas Mermaid

### 2.1. Mapa de Telas e Navegação

```mermaid
flowchart TD
    classDef main fill:#0d1838,stroke:#3d86ff,stroke-width:2px,color:#fff;
    classDef modal fill:#1f1338,stroke:#a46bff,stroke-width:1px,color:#fff;
    classDef auth fill:#1a233a,stroke:#25d07a,stroke-width:1px,color:#fff;

    Start(["Visitante Acessa o Site"]) --> Landing["Landing Page / Museu Preview"]:::main

    Landing -->|Explorar sem login| Home["Home: Acervo & Hoje na História"]:::main
    Landing -->|Cadastrar / Entrar| Auth["Onboarding / Login OAuth"]:::auth

    Auth --> AvatarBuilder["Criador do Gato (Avatar & Nick)"]:::auth
    AvatarBuilder --> MemberCard["Geração da Carteirinha Digital"]:::auth
    MemberCard --> Home

    subgraph Navegacao_Principal ["Área do Usuário Logado"]
        Home --> Timeline["Linha do Tempo (2004 - Atualidade)"]:::main
        Home --> Feed["Feed Contínuo de Memes"]:::main
        Home --> Album["Álbum de Figurinhas"]:::main
        Home --> Categories["Filtro por Categorias"]:::main
        Home --> Ranking["Ranking de Guardiões & XP"]:::main
        Home --> Profile["Perfil do Usuário & Coleção"]:::main
    end

    subgraph Modais_e_Acoes ["Ações e Modais"]
        Home -->|Botão Salvar Meme| ModalSubmit["Modal: Submissão de Meme"]:::modal
        Timeline -->|Clique no Registro| ModalMeme["Modal: Detalhes do Meme & Contexto"]:::modal
        Feed -->|Interação| ActionSave["Salvar no Baú Pessoal"]:::modal
        
        Album -->|Botão Abrir Pacote| ModalPack["Modal: Abertura 3D de Booster"]:::modal
        Album -->|Troca de Repetidas| ModalTrade["Modal: Sistema de Trocas (P2P)"]:::modal
        
        Profile -->|Editar| ModalEditCat["Editor do Mascote Felino"]:::modal
        Profile -->|Baixar| ExportCard["Exportar PNG/SVG da Carteirinha"]:::modal
    end

    subgraph Painel_Admin ["Curadoria & Moderação"]
        AdminAuth["Acesso Moderador / Admin"]:::auth --> AdminPanel["Fila de Aprovação de Memes"]:::main
        AdminPanel -->|Aprovar| PublishMeme["Publicar no Acervo Oficial (+XP)"]:::main
        AdminPanel -->|Rejeitar| RejectMeme["Descartar ou Solicitar Ajuste"]:::main
    end
```

---

### 2.2. Arquitetura do Sistema e Infraestrutura

```mermaid
flowchart TD
    classDef edge fill:#f38020,stroke:#d35400,stroke-width:2px,color:#fff;
    classDef front fill:#000000,stroke:#333333,stroke-width:2px,color:#fff;
    classDef back fill:#00add8,stroke:#007d9c,stroke-width:2px,color:#fff;
    classDef data fill:#336791,stroke:#1d3d59,stroke-width:2px,color:#fff;
    classDef cache fill:#d82c20,stroke:#901d15,stroke-width:2px,color:#fff;
    classDef store fill:#fa6838,stroke:#c43e11,stroke-width:2px,color:#fff;

    Client["Navegador do Usuário / Mobile"] -->|DNS & HTTPS| CF["Cloudflare Edge (CDN, WAF, SSL, Cache)"]:::edge

    subgraph CDN_Edge ["Borda Cloudflare (Reduz 85% do Tráfego)"]
        CF -->|Cache de Imagens & Assets| StaticCache["Cache de Borda (Imagens, WebP, JS, CSS)"]:::edge
    end

    CF -->|Requisições Web / Páginas| NextApp["Next.js Frontend (Node Server / ISR)"]:::front
    CF -->|Requisições Diretas de API| GoAPI["Go Backend REST API (Gin / Fiber)"]:::back

    subgraph Servidor_VPS ["VPS 8 vCPUs / 24 GB RAM"]
        NextApp -->|Chamadas Internas| GoAPI

        GoAPI -->|Cache de Feed, Sessões & Rate Limit| RedisCache["Redis (Cache em RAM ~3GB)"]:::cache
        GoAPI -->|Fila Assíncrona de Processamento| RedisQueue["Redis Queues (Asynq)"]:::cache
        
        GoAPI -->|Consultas e Persistência| Postgres[("PostgreSQL 16 (~10GB RAM)")]:::data

        subgraph Workers_Background ["Workers de Segundo Plano em Go"]
            RedisQueue --> MediaWorker["Worker de Mídia (Compressão WebP/AVIF)"]:::back
            RedisQueue --> SyncWorker["Worker de Metadados (Embeds YouTube/X)"]:::back
        end
    end

    MediaWorker -->|Upload Direto de Arquivos Otimizados| R2["Cloudflare R2 / S3 Object Storage"]:::store
    StaticCache -.->|Entrega Direta de Imagens| R2
```

---

### 2.3. Fluxo de Submissão e Processamento de Mídia

```mermaid
sequenceDiagram
    autonumber
    actor U as Usuário
    participant FE as Next.js (Web)
    participant API as Backend Go (API)
    participant DB as PostgreSQL
    participant Q as Redis Queue (Asynq)
    participant W as Worker Go (Processador)
    participant R2 as Cloudflare R2 (Storage)
    actor MOD as Curador / Admin

    U->>FE: Preenche formulário (URL, Título, Ano, Contexto)
    FE->>API: POST /api/v1/memes/check-duplicate (URL / Hash)
    API-->>FE: Status de duplicidade (Liberado ou Alerta)

    U->>FE: Confirma submissão
    FE->>API: POST /api/v1/memes/submit
    API->>DB: Salva registro como 'PENDENTE'
    API->>Q: Enfileira tarefa (Processar Mídia & Embed)
    API-->>FE: Confirmação de envio (+10 XP Provisório)

    Q->>W: Consome tarefa de processamento
    W->>W: Captura thumbnail, converte para WebP e gera preview
    W->>R2: Armazena thumbnails otimizadas
    W->>DB: Atualiza registro com assets otimizados

    MOD->>FE: Abre Painel de Curadoria
    FE->>API: GET /api/v1/admin/pending
    API->>DB: Consulta itens pendentes
    API-->>FE: Lista de submissões pendentes

    MOD->>FE: Clica em 'Aprovar Meme'
    FE->>API: POST /api/v1/admin/approve/{id}
    API->>DB: Altera status para 'PUBLICADO'
    API->>DB: Bonifica autor (+40 XP final)
    API->>Q: Envia gatilho de revalidação de cache (ISR / Redis)
    API-->>FE: Confirmação de publicação no acervo
```

---

### 2.4. Modelo de Dados (ER Diagram)

```mermaid
erDiagram
    USERS ||--o{ CAT_AVATARS : customizes
    USERS ||--o{ MEMES : submits
    USERS ||--o{ USER_CARDS : owns
    USERS ||--o{ SAVED_MEMES : favorites
    USERS ||--o{ TRADE_OFFERS : creates

    MEMES }|--|| CATEGORIES : belongs_to
    MEMES ||--o{ MEME_TAGS : has
    MEME_TAGS }|--|| TAGS : references

    ALBUM_COLLECTIONS ||--o{ CARDS : contains
    CARDS ||--o{ USER_CARDS : instances

    USERS {
        uuid id PK
        string nickname UK
        string email UK
        int xp_points
        int current_level
        int packs_available
        int web_since_year
        string favorite_meme_id
        timestamp created_at
    }

    CAT_AVATARS {
        uuid id PK
        uuid user_id FK
        string fur_color
        string pattern
        string eye_color
        string accessory
        string outfit
        string background_gradient
        json raw_svg_config
    }

    MEMES {
        uuid id PK
        uuid author_id FK
        string title
        string source_url
        string normalized_url
        int year
        date exact_date
        text context_description
        string media_type
        string thumbnail_r2_path
        string status
        int views_count
        int saves_count
        timestamp created_at
    }

    CATEGORIES {
        int id PK
        string slug UK
        string name
        string icon
    }

    CARDS {
        uuid id PK
        uuid collection_id FK
        int card_number
        string name
        string rarity
        text lore_description
        string art_svg_or_img
    }

    USER_CARDS {
        uuid id PK
        uuid user_id FK
        uuid card_id FK
        int quantity
        boolean is_favorite
        timestamp acquired_at
    }

    TRADE_OFFERS {
        uuid id PK
        uuid user_offering_id FK
        uuid user_demanded_id FK
        uuid offered_card_id FK
        uuid requested_card_id FK
        string status
        timestamp created_at
    }
```

---

## 3. Stack Tecnológica e Dimensionamento

### 🚀 Stack Principal
| Componente | Tecnologia | Papel Principal |
| :--- | :--- | :--- |
| **Borda & CDN** | Cloudflare Enterprise/Pro + WAF | Cache estático agressivo, proteção DDoS e proxy |
| **Storage de Mídia** | Cloudflare R2 | Armazenamento S3-compatible com taxa de saída de dados (egress) zerada |
| **Frontend** | Next.js (App Router, React, TailwindCSS) | Páginas com ISR (Incremental Static Regeneration) e navegação client-side rápida |
| **Backend API** | Go (Golang) com Gin ou Fiber | API REST leve, concorrência nativa de alto desempenho e baixo uso de RAM |
| **Filas & Cache** | Redis 7 + Asynq (Go) | Cache de feeds, controle de sessões e filas de background para imagens |
| **Banco de Dados** | PostgreSQL 16 com extensão `pg_trgm` | Persistência relacional, busca textual rápida e integridade |

---

### ⚙️ Alocação de Recursos (VPS 8 vCPUs / 24 GB RAM)
Para evitar que picos derrubem o servidor por esgotamento de memória (*OOM Killer*), a distribuição de memória é isolada:

```
+---------------------------------------------------------------+
|                      VPS CONTABO 24 GB RAM                    |
+-------------------+--------------------+----------------------+
| PostgreSQL 16     | Next.js (Cluster)  | Redis (LRU Cache)    |
| ~10 GB RAM        | ~4 GB RAM          | ~3 GB RAM            |
| (shared_buf: 6GB) | (Node multi-core)  | (allkeys-lru)        |
+-------------------+--------------------+----------------------+
| Go API + Workers  | Linux Kernel & SO  | Margem de Segurança  |
| ~2 GB RAM         | ~3 GB RAM (Buffer) | ~2 GB RAM            |
+-------------------+--------------------+----------------------+
```

### ⚡ Estratégia de Escalabilidade (Até 30.000 usuários simultâneos)
1. **ISR no Next.js:** páginas de anos passados e coleções são pré-geradas e cacheadas na Cloudflare.
2. **Processamento Desacoplado:** o upload de imagens/vídeos nunca bloqueia a requisição HTTP; o backend coloca a tarefa na fila do Redis e os workers em Go realizam redimensionamento e conversão WebP em segundo plano.
3. **Cache de Borda na Cloudflare:** mais de 85% das requisições de mídias e páginas públicas não chegam ao disco nem à CPU da VPS.

---

## 4. Estrutura de Diretórios Recomendada

```plaintext
naosalvo/
├── .github/
│   └── workflows/              # CI/CD para build, testes e deploy
├── apps/
│   ├── web/                    # Frontend Next.js (App Router)
│   │   ├── src/
│   │   │   ├── app/            # Rotas: /, /timeline, /feed, /album, /admin
│   │   │   ├── components/     # UI, Player, Avatar Builder, Pack Modal
│   │   │   ├── hooks/          # Consumo de dados e estado local
│   │   │   └── lib/            # Clientes de API e utilitários de data/svg
│   │   ├── public/
│   │   ├── package.json
│   │   └── next.config.mjs
│   │
│   └── api/                    # Backend Go
│       ├── cmd/
│       │   ├── server/         # Ponto de entrada da API HTTP
│       │   └── worker/         # Processador assíncrono de filas (Asynq)
│       ├── internal/
│       │   ├── handler/        # Controladores HTTP (memes, album, users)
│       │   ├── service/        # Regras de negócio, XP e trocas
│       │   ├── repository/     # Queries SQL (Postgres / pgx)
│       │   └── queue/          # Produtores e consumidores de tarefas
│       ├── pkg/
│       │   └── avatar/         # Gerador procedural de avatares SVG
│       ├── go.mod
│       └── go.sum
│
├── deploy/
│   ├── docker-compose.yml      # Orquestração local e produção
│   ├── nginx/                  # Configurações de reverse proxy (se aplicável)
│   └── postgres/
│       └── init.sql            # Scripts de schema inicial e migrações
│
├── docs/
│   ├── references/             # HTMLs dos protótipos originais de referência
│   └── architecture/           # Detalhes de infraestrutura e API
│
└── README.md
```

---

## 5. Regras de Negócio e Curadoria

1. **Submissão e Prevenção de Duplicatas:**
   - Ao colar um link (YouTube, TikTok, X, etc.), o sistema normaliza parâmetros de rastreamento (`utm_*`, `si=`, etc.) e verifica no banco.
   - O título passa por checagem fonética/similaridade de texto (`similarity` no PostgreSQL) para sugerir itens existentes.
2. **Ciclo de Moderação:**
   - Memes enviados entram como `PENDENTE`.
   - Moderadores podem: aprovar, rejeitar com justificativa, ou editar categoria/ano/contexto.
3. **Gamificação e Recompensas:**
   - Cada login diário concede 1 pacote de cartas.
   - Submissão aprovada garante +50 XP.
   - Cartas repetidas podem ser recicladas (proporção 5:1).
   - O ranking lista os maiores guardiões da memória nacional.

---

## 6. Referências de Design e Mockups

### 6.1. Protótipos da comunidade
Os protótipos conceituais desenvolvidos pela comunidade estão catalogados na pasta [`docs/references/`](docs/references/):
- **Mockup Geral & Linha do Tempo:** [`docs/references/riba_main.html`](docs/references/riba_main.html)
- **Álbum de Figurinhas Digital:** [`docs/references/riba_album.html`](docs/references/riba_album.html)
- **Conceito Completo com Feed & Avatar:** [`docs/references/cid_ideia.html`](docs/references/cid_ideia.html)

### 6.2. Referência visual e funcional: Não Salvo 2 (demo)
Referência principal do visual e das mecânicas de álbum, ranking e avatar: **<https://nao-salvo-2.netlify.app/>** (cadastro em [`#/cadastro`](https://nao-salvo-2.netlify.app/#/cadastro), álbum em [`#/album`](https://nao-salvo-2.netlify.app/#/album), ranking em [`#/ranking`](https://nao-salvo-2.netlify.app/#/ranking)). O que foi extraído e onde foi aplicado no `index.html`:

**Arquitetura observada**
- SPA em React com rotas por hash (`#/...`), empacotada com Vite. O bundle inclui o cliente do Supabase (funções de borda), o que aponta para o backend de dados e autenticação.
- Rotas: `/` (início), `/explorar` e `/explorar/:ano`, `/categorias` e `/categorias/:id`, `/aleatorio`, `/busca`, `/v/:slug` (vídeo), `/album` e `/album/:colecao`, `/colecoes`, `/disquetes`, `/eventos`, `/ranking`, `/perfil`, `/u/:username`, `/enviar`, `/moderacao`, `/cadastro` e `/entrar`.

**Sistema visual**

| Token | Valor |
|---|---|
| Fundo / painel | `#030409` / `#0a0e18` |
| Texto / texto secundário | `#f2f4f9` / `#a7b0c2` |
| Azul principal (+ variações) | `#2459ff` (`#3d6bff`, `#6b8fff`) |
| Destaques | roxo `#7c5cff`, dourado `#f5b70a`, verde `#2fbf5b`, vermelho `#ff3b47` |
| Tipografia | Barlow Condensed (títulos, caixa alta) e Barlow (texto) |
| Raios / largura | 10 px e 16 px / contêiner de 1400 px, cabeçalho de 76 px |

**Mecânicas extraídas**
- **Início:** hero com mosaico de memes, pilares (Colaborativo, Organizado, Eternizado, Feito por fãs), trilho de anos, "Em alta agora", "Hoje há 10 anos", "Últimos adicionados", top colaboradores e categorias.
- **Álbum:** barra lateral com coleções e progresso, fichário com argolas e paginação, painel de detalhe da carta e cartas bloqueadas como silhueta `???`. Tabelas completas na seção 1.4.
- **Raridades e economia:** 6 níveis (Comum, Relevante, Raro, Relíquia, Lendário, Mítico) com XP e moedas por repetida (2/5, 4/10, 8/20, 15/40, 30/80, 60/150).
- **Disquetes:** 10 tipos de 4 a 5 cartas, com chances por raridade (padrão 52/26/13/6/2,5/0,5 %), carta garantida, evento de chance dobrada e disquete Ouro sem comuns.
- **Criador de gatos:** 4 abas (Pelo, Acessórios, Roupa, Fundo), com 10 pelagens, 5 padrões, 5 cores de olhos, 8 acessórios (um por região), 7 roupas, 8 fundos e botão "Embaralhar tudo".
- **Ranking:** pódio com gatos, filtros (XP geral, Envios aprovados, Cartas coletadas), tabela com patente e nível, e painel de patentes (Discado, Banda larga, Colaborador, Moderador, Dono de comunidade, Lenda da internet).
- **Cadastro:** fluxo em 3 passos, com o avatar do gato criado junto com a conta.

**Diferenças deliberadas neste projeto**
- O acervo usa os 59 memes reais do projeto. As coleções Expansão Orkut, Plataformas Raiz e Blogs & Épicos ainda não têm registros e mostram só vagas bloqueadas.
- As cartas ganharam moldura por estilo (polaroid, tela de TV, tira de filme e clássica) e brilho reflexivo que segue o ponteiro em Relíquia, Lendário e Mítico.
- O disquete tem animação de abertura (queda, carga, flash e distribuição das cartas).
- O ranking mantém os Guardiões do acervo junto dos usuários de demonstração da referência.
- Os dados de ranking, patentes e níveis são de demonstração. Ainda não há backend.

> Os pontos acima descrevem o comportamento e o visual observados na demo pública. O código-fonte da referência não é copiado para este repositório, só as regras e os valores necessários para reproduzir o comportamento.

---

### 🤝 Como Contribuir
Consulte os responsáveis pelo repositório (`@SePPZAO`, `@cidcidoso`) para alinhamento nas issues e branches de desenvolvimento.
