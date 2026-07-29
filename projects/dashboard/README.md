# dashboard

Dashboard administrativo baseado no template **shadcn/ui dashboard** (React +
Tailwind), pareado com o projeto Figma correspondente.

| Item | Valor |
|---|---|
| Frame do Figma | `653:81` (app frame) |
| Export congelado em | 2026-07-02 |
| Elementos no design | 654 nós (653 com bounding box) |
| Variantes | 12 (6 categorias x 2 severidades) |
| Status de curadoria | incluído (reference fiel ao design) |

## Conteúdo

- `figma/raw.json`: export REST do frame (árvore de nós, ~3,7 MB)
- `figma/figma.png`: imagem oficial exportada pelo próprio Figma
- `reference/`: implementação de referência (v0)
- `variants/<v>/`: 12 variantes, cada uma com **1 defeito** documentado em `manifest.toml`
- `ground_truth.toml`: gabarito por variante

## Proveniência

- Template de código: shadcn/ui dashboard (MIT).
- Projeto Figma e curadoria inicial: equipe do projeto (dataset original de
  referência do grupo, estendido com as 12 variantes de defeito controlado).
- Defeitos injetados manualmente; cada variante altera exatamente 1 arquivo
  (verificável via `manifest.toml` → `files_changed`).
