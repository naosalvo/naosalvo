# Não Salvo — Economia e escassez do álbum de figurinhas

*Atualizado em 18/11/2026*

## Resumo

Com as regras propostas pelo grupo, **ninguém completa o álbum em menos de 2 meses, e só ~8% dos usuários fecham o álbum em 6 meses**. Numa base de 20 mil usuários ativos, isso dá ~1.600 álbuns completos em 6 meses e ~6.100 em 1 ano.

A pergunta do grupo era: "Pra entendermos o nível de raridade, quantos usuários conseguiriam completar o álbum de fato, de acordo com o número de usuários?". Para responder, simulamos 3 mil jogadores virtuais por perfil durante 2 anos, abrindo pacotes, trocando repetidas por moeda, comprando pacotes e enviando vídeos.

- **Quem completa primeiro é quem mais contribui:** o jogador que entra todo dia e envia 1 vídeo aprovado por dia leva ~5 meses e meio (mediana de 166 dias).
- **O jogador casual quase não completa em 1 ano:** só 7,5% conseguem.
- **O que define a escassez é a carta Mítica:** cada uma sai 1 vez a cada ~800 cartas.
- **Sem limite de tiragem, a quantidade de álbuns completos cresce junto com a base de usuários.** Para ter um teto fixo, é preciso tiragem numerada (seção Diagnóstico).

## Regras atuais

O álbum tem **109 cartas em 8 coleções**, e cada pacote tem 5 cartas. Dentro de uma mesma raridade, todas as cartas têm a mesma chance de sair.

| Raridade | Chance por carta | Cartas no álbum | Chance de 1 carta específica | Repetida vale (moedas) |
| --- | --- | --- | --- | --- |
| Comum | 44% | 28 | 1 em 64 | 5 |
| Relevante | 26% | 26 | 1 em 100 | 10 |
| Raro | 15% | 21 | 1 em 140 | 20 |
| Relíquia | 9% | 15 | 1 em 167 | 40 |
| Lendário | 5% | 11 | 1 em 220 | 80 |
| Mítico | 1% | 8 | 1 em 800 | 150 |

Outras formas de ganhar moeda:

| Ação | Moedas |
| --- | --- |
| Envio aprovado no acervo | 25 |
| Salvar o link de um viral antigo | 5 |
| Completar uma coleção | 100 |

Pacotes: 1 pacote grátis por dia ao entrar no site e um pacote de boas-vindas no cadastro. Na simulação, o pacote comprado custa **150 moedas**. Esse preço não estava na proposta original, então é o primeiro número que o grupo deve validar.

## Como a simulação foi feita

Cada jogador virtual repete o mesmo dia a dia por até 2 anos, e anotamos em que dia ele completa o álbum. Rodamos 3 mil jogadores por perfil.

| Perfil | Entra no site | Envios aprovados | Parte da base |
| --- | --- | --- | --- |
| Casual | 2 dias por semana | nenhum | 70% |
| Engajado | 5 dias por semana | 2 por semana | 25% |
| Hardcore (chat / colaborador) | todo dia | 1 por dia | 5% |

Como cada dia funciona:

1. No cadastro, o jogador abre o pacote de boas-vindas.
2. Nos dias em que entra, abre o pacote grátis do dia.
3. Cada envio aprovado dá 25 moedas, e cada coleção completa dá 100.
4. Toda repetida vira moeda na hora, e ele compra um pacote sempre que junta 150 moedas.

A simulação deixa de fora três coisas: troca de cartas entre jogadores, eventos com chance aumentada e a moeda de salvar links antigos (5 moedas, pouco impacto). Com troca, todos completariam mais rápido do que mostram os números abaixo.

## Resultados

![Percentual de jogadores com o álbum completo por dias desde o cadastro, por perfil](img/completos-por-perfil.png)

A mediana para completar o álbum é de **166 dias** para o hardcore, **252 dias** para o engajado e **678 dias** para o casual. Nos primeiros 2 meses, ninguém completa.

Projeção para uma base de 20 mil usuários ativos (70% casuais, 25% engajados, 5% hardcore):

| Tempo desde o lançamento | Álbuns completos | % da base |
| --- | --- | --- |
| 3 meses | ~80 | 0,4% |
| 6 meses | ~1.570 | 7,9% |
| 1 ano | ~6.090 | 30,4% |
| 2 anos | ~13.950 | 69,7% |

## Diagnóstico

**A economia fecha, e quem limita o ritmo é a carta Mítica.** Mas, sem tiragem limitada, a escassez não tem teto.

**1. A moeda não vira máquina infinita.** Na média, uma carta repetida vale 16,9 moedas. Então um pacote só de repetidas devolve ~85 moedas, 56% do preço de 150. Se o pacote custar menos de ~85, quem está no fim do álbum abre pacotes sem parar.

```math
\text{valor médio da repetida} = \sum_{r} \text{chance}_r \times \text{moedas}_r = 0{,}44(5) + 0{,}26(10) + 0{,}15(20) + 0{,}09(40) + 0{,}05(80) + 0{,}01(150) = 16{,}9
```

**2. O gargalo é o Mítico.** Com 1% de chance dividido entre 8 Míticos, cada um sai 1 vez a cada ~800 cartas. Juntar os 8 leva em média ~2.170 cartas, ou ~435 pacotes. Cada Mítico novo deixa todos os outros mais raros.

**3. A escassez cresce junto com a base.** Hoje, a chance de completar é a mesma para cada usuário, então dobrar a base dobra o número de álbuns completos. Com 20 mil usuários são ~6.100 em 1 ano, e com 100 mil seriam ~30 mil.

**4. Tiragem limitada é o que cria um teto real.** Se cada Mítico tiver, por exemplo, só 500 cópias numeradas no site inteiro ("carta nº 37 de 500"), existem no máximo 500 álbuns completos, não importa o tamanho da base. O resto do álbum continua sem limite.

## Recomendações de game design

As três alavancas que mais mudam o resultado são: o preço do pacote, a chance do Mítico e quantos Míticos existem.

| Alavanca | Se quiser o álbum completo mais raro | Se quiser mais gente completando |
| --- | --- | --- |
| Preço do pacote | subir (ex.: 200 moedas) | descer, mas nunca abaixo de ~85 |
| Chance do Mítico | 0,5% | 2% |
| Quantidade de Míticos | mais Míticos por coleção | 1 por coleção, como hoje |
| Moedas por envio aprovado | reduzir de 25 | manter 25 |

- **Tiragem numerada nos Míticos:** fixa um teto de álbuns completos e cria a escassez "de verdade" que o grupo pediu.
- **Proteção contra azar:** garantir um Lendário ou melhor a cada 40 pacotes sem nenhum. Não muda a escassez do Mítico, só evita que o casual desista.
- **Recompensa por envio é o motor do acervo:** faz quem alimenta o site completar primeiro, o que é bom. Se o acervo começar a receber spam, reduzam a recompensa, não a chance das cartas.
- **Expansões por temporada:** coleções menores (ex.: Semana do Orkut) dão metas de semanas, enquanto o álbum inteiro leva meses.
- **Troca entre jogadores, com limite:** acelera muito a conclusão e pode criar mercado paralelo. Se entrar, limitem por dia e só entre cartas da mesma raridade.

## Próximos passos

- [ ] Definir o preço do pacote comprado (a simulação usou 150 moedas)
- [ ] Decidir se os Míticos terão tiragem numerada e quantas cópias cada um
- [ ] Escolher a meta: quantos álbuns completos queremos ter em 6 meses e em 1 ano
- [ ] Decidir se haverá troca de cartas entre jogadores
- [ ] Revisar a lista de cartas e a raridade de cada uma, com a grafia dos nomes conferida
- [ ] Montar o grupo de game design e rodar a simulação de novo com as regras finais
