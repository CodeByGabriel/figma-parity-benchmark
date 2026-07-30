# coffee_shop

Template "Coffee Shop" do kit Preline UI, pareado com o projeto Figma correspondente.

| Item | Valor |
|---|---|
| Fonte do codigo | github.com/htmlstreamofficial/preline (diretorio templates/, MIT) |
| Fonte do design | arquivo oficial do Preline UI na community do Figma |
| Variantes | 6 (uma por categoria, severidade gross; as subtle ainda nao foram geradas) |
| Status de curadoria | incluido, com ressalva (ver notas) |

## Conteudo

- `figma/raw.json`: export REST do Figma (congelado)
- `figma/figma.png`: imagem oficial exportada pelo proprio Figma
- `reference/index.html`: codigo como publicado (assets em CDN)
- `reference/index.offline.html`: mesma pagina com assets locais em `reference/vendor/`, para render reproduzivel sem rede
- `variants/<v>/src/index.html`: variante com 1 defeito injetado; caminhos de assets ajustados para a arvore deste repositorio
- `ground_truth.toml`: gabarito por variante

## Notas de curadoria

- O hero do codigo usa altura relativa a janela (`h-120 md:h-[80dvh]`), enquanto o
  design fixa o hero em 528px. Por construcao, os dois so coincidem numa janela de
  660px de altura. Renderizado a 1728x1080, a pagina mede 4240px contra 4011px da
  area de app do design (~5,7%, quase tudo no hero). Capturas com viewport igual a
  altura do design inflam o hero (80% de 4011 = 3209px) e nao devem ser usadas.
- A URL do Unsplash que aparece no HTML e apenas o nome da classe Tailwind (inerte);
  o CSS compilado em `reference/vendor/` ja aponta para a copia local da imagem.
  Render sem rede verificado: zero requisicoes externas.
- O design tem uma moldura de navegador desenhada (33px de altura) que nao existe
  no codigo; a comparacao deve considerar a area do app.
- Mesmo o par sem defeito injetado tem pequenas divergencias reais entre o design
  e o codigo publicados. Isso e dado do mundo real, nao defeito do benchmark.
