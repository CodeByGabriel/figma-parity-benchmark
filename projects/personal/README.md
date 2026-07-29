# personal

Template "Personal" do kit Preline UI, pareado com o projeto Figma correspondente.

| Item | Valor |
|---|---|
| Fonte do codigo | github.com/htmlstreamofficial/preline (diretorio templates/, MIT) |
| Fonte do design | arquivo oficial do Preline UI na community do Figma |
| Variantes | 6 (uma por categoria, severidade gross; as subtle ainda nao foram geradas) |
| Status de curadoria | proposto para inclusao (validacao em grupo pendente) |

## Conteudo

- `figma/raw.json`: export REST do Figma (congelado)
- `figma/figma.png`: imagem oficial exportada pelo proprio Figma
- `reference/index.html`: codigo como publicado (assets em CDN)
- `reference/index.offline.html`: mesma pagina com assets locais em `reference/vendor/`, para render reproduzivel sem rede
- `variants/<v>/src/index.html`: variante com 1 defeito injetado; caminhos de assets ajustados para a arvore deste repositorio
- `ground_truth.toml`: gabarito por variante

## Notas de curadoria

- O design tem uma moldura de navegador desenhada (33px de altura) que nao existe no codigo; a comparacao deve considerar a area do app.
- Mesmo o par sem defeito injetado tem pequenas divergencias reais entre o design e o codigo publicados. Isso e dado do mundo real, nao defeito do benchmark.
