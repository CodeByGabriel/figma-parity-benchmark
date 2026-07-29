# figma-parity-benchmark

Benchmark para avaliação de técnicas de verificação de conformidade entre **design
(Figma)** e **implementação (código front-end)**.

Este repositório contém **apenas o dataset**: os insumos primários (export do Figma,
código de referência, variantes com defeitos controlados) e o gabarito. Ele é
**independente de qualquer técnica de avaliação**: abordagens semânticas, visuais,
geométricas ou quaisquer outras devem viver em repositórios próprios e apenas
*consumir* este.

## Estrutura de um projeto

```
projects/<nome>/
├── README.md            # fonte, link do design, status de curadoria
├── figma/
│   ├── raw.json         # export REST do Figma (congelado: puxado uma única vez)
│   └── figma.png        # imagem oficial renderizada pelo próprio Figma
├── reference/           # implementação de referência ("v0", considerada fiel)
├── variants/
│   └── <variante>/
│       ├── manifest.toml  # categoria, severidade, descrição e arquivos alterados
│       └── src/           # código da variante (reference + 1 defeito injetado)
└── ground_truth.toml    # gabarito: categoria esperada por variante
```

## Taxonomia de defeitos

Cada variante injeta **exatamente 1 defeito**, manualmente, em 1 das **6 categorias**:

| Categoria | Definição |
|---|---|
| `color` | cores de preenchimento, borda, texto; vínculo com token de tema |
| `layout` | estrutura de containers, direção/composição de grid ou flex |
| `alignment` | espaçamento, margem, padding, gap, offset, sem mudar a estrutura |
| `component` | módulo de UI inteiro removido/adicionado/substituído |
| `image` | proporção/dimensão/fonte de imagem, troca de ícone, asset ausente |
| `text` | tamanho/peso de fonte, entrelinha, truncamento, conteúdo textual |

Com **2 severidades**:

- `gross`: defeito evidente (deve ser detectável por qualquer técnica razoável)
- `subtle`: defeito sutil (testa o limite de sensibilidade da técnica)

Estrutura-alvo por projeto: `reference` + **12 variantes** (6 categorias x 2
severidades). O `ground_truth.toml` registra, por variante, a categoria que uma
técnica deve acusar (`on_axis`) e o status esperado (`mismatch`, `missing`, ...).

Casos-limite documentados no gabarito:
- mudança de espaçamento sem reestruturação (ex.: `gap-4 → gap-8`) conta como
  `alignment`, ainda que a variante se chame `layout_*`;
- remoção de um módulo inteiro tem status esperado `missing` (ausência não é
  categoria de *mismatch*; `on_axis = []`).

## Como uma variante é criada

1. Parte-se do código de `reference/` (cópia integral).
2. Injeta-se **1 defeito** de uma categoria/severidade, editando o mínimo de arquivos
   (nas variantes atuais: exatamente 1 arquivo, verificável no `manifest.toml`).
3. Registra-se o defeito no `manifest.toml` (categoria, severidade, descrição,
   arquivos alterados) e no `ground_truth.toml` do projeto.

## Como o export do Figma foi gerado

Duas chamadas à API REST oficial do Figma, congeladas em disco:
1. `GET /v1/files/{key}/nodes?ids={frame}` → `figma/raw.json` (árvore de nós);
2. `GET /v1/images/{key}?ids={frame}` → `figma/figma.png` (imagem oficial).

Os arquivos são **imutáveis** após a inclusão: re-exportações do Figma podem variar
(nós ausentes, limites da API), então a versão congelada é a fonte canônica do
projeto. Qualquer re-export deve entrar como *novo commit* explícito, nunca como
substituição silenciosa.

## Curadoria

Critério de elegibilidade: **a implementação de referência renderizada deve ser fiel
ao design** (juízo inicial subjetivo, validado em grupo). Projetos cujo `reference`
diverge substancialmente do Figma são corrigidos ou descartados: sem uma baseline
fiel, o projeto não serve para avaliar técnica nenhuma.

| Projeto | Figma | Reference | Fiel ao design? | Variantes | Status |
|---|---|---|---|---|---|
| `dashboard` | sim | sim | sim | 12 | incluído |
| `ai_chat` (Preline) | sim | sim | sim | 12 | incluído (validação em grupo pendente) |
| `cms` (Preline) | sim | sim | sim | 6 | incluído (validação em grupo pendente) |
| `agency` (Preline) | sim | sim | sim | 6 | incluído (validação em grupo pendente) |
| `personal` (Preline) | sim | sim | sim | 6 | incluído (validação em grupo pendente) |
| `coffee` (Preline) | sim | sim | parcial (o hero usa 80dvh e estica com o viewport da captura; a diferença de altura vem quase toda disso) | 6 | em curadoria (decisão em grupo) |
| dark dos 5 Preline + 3 telas extras do shadcn | sim | não | | | fora por enquanto (sem código de referência) |

## O que este repositório NÃO contém

Para não contaminar o dataset com decisões de técnica:

- pré-processamentos de abordagens (ex.: representações simplificadas do design,
  agrupamentos de nós, extrações de geometria);
- screenshots renderizados da implementação (deriváveis do código);
- rótulos/saídas de modelos de IA, métricas, placares e painéis;
- qualquer código de avaliação.

Tudo isso pertence aos repositórios das técnicas, que consomem este dataset.
