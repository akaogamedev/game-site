import type { GameTranslation } from "../game";

export const ptBrGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A vira Z, B vira Y. Digite em um alfabeto invertido.",
    genre: "Digitação",
    dialogue: [
      { speaker: "onaga", text: "O que muda em relação a um jogo de digitação normal?" },
      {
        speaker: "akao",
        text: "Cada tecla é invertida no alfabeto: A vira Z, B vira Y e assim por diante.",
      },
      { speaker: "onaga", text: "Eu aperto A e aparece Z? Minha cabeça vai dar um nó." },
      {
        speaker: "akao",
        text: "Esse é o desafio. Digite o máximo de palavras antes do tempo acabar e suba no ranking. Foi o primeiro jogo do projeto de 100 jogos.",
      },
    ],
    features: [
      "Treino de digitação com alfabeto invertido",
      "Salve sua pontuação no ranking local deste dispositivo",
    ],
    controls: [
      { label: "Iniciar", text: "Digite um nome e selecione START" },
      { label: "Digitar", text: "Use o teclado para inserir as letras exibidas" },
    ],
    notes: ["Todas as letras são avaliadas ao contrário: A↔Z, B↔Y e assim por diante."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Arremesse o mais perto possível da borda da zona de strike.",
    genre: "Esportes",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de beisebol! Como eu jogo?" },
      {
        speaker: "akao",
        text: "Faça um strike bem na borda. Quanto mais perto do limite, mais pontos você ganha.",
      },
      { speaker: "onaga", text: "Então posso arremessar sempre no mesmo lugar, certo?" },
      {
        speaker: "akao",
        text: "Não exatamente. Repetir posição ou tipo de arremesso facilita a rebatida. Alterne entre os seis arremessos.",
      },
    ],
    features: [
      "Seis tipos de arremesso",
      "Repetir posição ou arremesso aumenta a chance de rebatida",
      "Escolha de estilo de controle antes de começar",
    ],
    controls: [
      { label: "Escolher arremesso", text: "Botões na tela ou teclas 1 a 6" },
      { label: "Mirar", text: "Arraste o mouse ao redor da zona de strike" },
      { label: "Arremessar", text: "Pare o medidor na área branca com PITCH, Space ou Enter" },
      { label: "Voltar ao título", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Desenho com uma IA provocadora",
    catch: "Faça a IA adivinhar seu desenho enquanto ela critica cada traço.",
    genre: "Desenho",
    dialogue: [
      { speaker: "onaga", text: "Eu vou desenhar junto com a IA?" },
      {
        speaker: "akao",
        text: "Você vence quando a IA reconhece seu desenho. O problema é que ela fica provocando o tempo todo.",
      },
      { speaker: "onaga", text: "Essa IA tem uma personalidade horrível." },
      {
        speaker: "akao",
        text: "Pense nisso como treino mental. Você pode achar seu desenho bem claro, mas a IA enxerga algo completamente diferente. Essas reações inesperadas também são divertidas.",
      },
    ],
    features: [
      "Faça a IA identificar seu desenho",
      "Mantenha o foco apesar das provocações",
    ],
    controls: [
      { label: "Desenhar", text: "Desenhe na tela e escolha as cores abaixo. Ao terminar, aperte «完了» para receber a resposta da IA. O fim do tempo também inicia a avaliação." },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Um jogo de ritmo sem música de fundo, apenas efeitos sonoros.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de ritmo sem música?" },
      {
        speaker: "akao",
        text: "Exatamente. Você só ouve efeitos. Siga o espaço entre as notas e o ritmo visual.",
      },
      { speaker: "onaga", text: "Parece bem diferente. É difícil?" },
      {
        speaker: "akao",
        text: "Há três dificuldades. A pontuação e o maior combo ficam salvos em um ranking local.",
      },
    ],
    features: [
      "Ritmo guiado por efeitos sonoros, sem música",
      "Três níveis de dificuldade",
      "Ranking local de pontos e maior combo",
    ],
    controls: [{ label: "Acertar notas", text: "D / F / J / K, da esquerda para a direita. Pressione a tecla quando a nota alcançar a linha de julgamento na frente." }],
  },
  "pittari-hitofudegaki": {
    title: "Desenho perfeito em um traço!",
    catch: "Quão perto do modelo você consegue chegar sem levantar o traço?",
    genre: "Desenho",
    dialogue: [
      { speaker: "onaga", text: "Um jogo de desenho? Eu desenho bem." },
      {
        speaker: "akao",
        text: "Escolha um modelo e trace de uma só vez. Quanto mais perto da estrela ou do peixe, maior a pontuação.",
      },
      { speaker: "onaga", text: "A nota aparece assim que eu termino?" },
      {
        speaker: "akao",
        text: "Sim, no instante em que você solta o dedo ou o mouse. Cada modelo tem seu próprio ranking.",
      },
    ],
    features: [
      "Desafios rápidos de pontuação",
      "Ranking on-line para cada modelo",
    ],
    controls: [
      { label: "Um traço", text: "Arraste com mouse ou toque e solte para receber a nota" },
    ],
  },
  "kenpin-15puzzle": {
    title: "Inspeção! Quebra-cabeça de 15",
    catch: "Não resolva. Decida se ele pode ser resolvido.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "Tenho que resolver quebra-cabeças de 15?" },
      {
        speaker: "akao",
        text: "Não precisa. Inspecione cada tabuleiro e decida se ele tem solução nesta corrida contra o tempo.",
      },
      { speaker: "onaga", text: "E se eu não conseguir saber só de olhar?" },
      {
        speaker: "akao",
        text: "Você pode mover as peças para conferir. Acerte dez tabuleiros seguidos para concluir.",
      },
      { speaker: "onaga", text: "Vejo modos EASY e CRAZY..." },
      {
        speaker: "akao",
        text: "Os tabuleiros EASY parecem quase completos, mas também incluem casos impossíveis com números trocados. Os tabuleiros CRAZY são totalmente aleatórios.",
      },
    ],
    features: [
      "Descubra se cada tabuleiro pode ser resolvido",
      "Os tabuleiros EASY parecem quase completos, mas também incluem casos impossíveis com números trocados.",
      "Tabuleiros CRAZY totalmente aleatórios",
      "Ranking on-line de tempo",
    ],
    controls: [
      { label: "Selecionar/mover", text: "Mouse ou toque" },
      { label: "Pronto para envio", text: "Se você acha que tem solução" },
      { label: "Defeituoso", text: "Se você acha que é impossível" },
    ],
    notes: ["Acerte dez tabuleiros seguidos. O resultado mostra tempo e erros."],
  },
  "mitomano-1mm": {
    title: "O milímetro de Mitoma",
    catch: "Deslize antes que a bola cruze a linha neste desafio instantâneo.",
    genre: "Esportes",
    dialogue: [
      { speaker: "onaga", text: "Que tipo de jogo é O milímetro de Mitoma?" },
      {
        speaker: "akao",
        text: "Corra atrás do passe e deslize para salvar a bola antes da linha de fundo. Cada tentativa dura poucos segundos.",
      },
      { speaker: "onaga", text: "Quanto mais perto, mais pontos. E se cruzar a linha?" },
      {
        speaker: "akao",
        text: "É OUT, claro. Pare no último instante e recrie aquele milagre famoso.",
      },
    ],
    features: [
      "Revisão de VAR",
      "Ranking on-line pela distância",
      "Quanto menor a distância restante, maior a pontuação",
    ],
    controls: [
      { label: "Correr", text: "Segure Space" },
      { label: "Deslizar", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Reversi de cálculo",
    catch: "Resolva contas para colocar peças em um Reversi em tempo real.",
    genre: "Tabuleiro",
    dialogue: [
      { speaker: "onaga", text: "O que muda em relação ao Reversi normal?" },
      {
        speaker: "akao",
        text: "Escolha uma casa válida, resolva a conta e coloque a peça. A partida inteira acontece em tempo real.",
      },
      { speaker: "onaga", text: "O oponente espera eu terminar?" },
      {
        speaker: "akao",
        text: "A CPU não espera. Se calcular rápido, você pode colocar várias peças antes da próxima jogada dela.",
      },
      { speaker: "onaga", text: "E se ocuparem a casa enquanto calculo?" },
      {
        speaker: "akao",
        text: "Você pode continuar se ela ainda for válida. Há três níveis de CPU, três de cálculo e modo para dois jogadores no celular.",
      },
    ],
    features: [
      "Reversi em tempo real com uma jogada por resposta correta",
      "Cálculo rápido permite várias jogadas antes da CPU",
      "Três níveis de CPU e de cálculo",
      "Modo para dois jogadores em dispositivos móveis",
    ],
    controls: [
      { label: "Mouse/toque", text: "Escolha a casa, use o teclado numérico e confirme ou apague" },
      { label: "Teclado", text: "Números para responder, Backspace para apagar e Enter para confirmar" },
      { label: "Um jogador", text: "Escolha uma casa e resolva a conta" },
      { label: "Dois jogadores", text: "Cada jogador usa seu tabuleiro e teclado ao mesmo tempo" },
    ],
    notes: ["Vence quem tiver mais peças quando as 64 casas estiverem cheias ou ninguém puder jogar."],
  },
  "nitro-tray-delivery": {
    title: "Entrega de nitro na bandeja",
    catch: "Não balance e não demore. Uma corrida 3D explosiva.",
    genre: "Ação",
    dialogue: [
      { speaker: "onaga", text: "O que exatamente eu estou entregando?" },
      {
        speaker: "akao",
        text: "Leve uma bandeja com nitroglicerina por uma fábrica perigosa e chegue ao final.",
      },
      { speaker: "onaga", text: "Já parece uma má ideia. O que acontece se eu correr?" },
      {
        speaker: "akao",
        text: "Acelerações, colisões, vento e barras giratórias enchem o medidor. No máximo, a garrafa cai e explode.",
      },
      { speaker: "onaga", text: "Tenho que ser rápido sem balançar. Como?" },
      {
        speaker: "akao",
        text: "Ande com cuidado, calcule os obstáculos e escolha sua rota. Portões verdes reduzem cinco segundos.",
      },
    ],
    features: [
      "Corrida 3D carregando nitroglicerina",
      "Andar com cuidado reduz velocidade e balanço",
      "Ventiladores, barras, carrinhos, pisos escorregadios e mais",
      "Portões de cinco segundos e ranking on-line",
    ],
    controls: [
      { label: "Mover", text: "WASD ou setas" },
      { label: "Andar com cuidado", text: "Segure Space ou Shift enquanto se move" },
      { label: "Recomeçar", text: "R" },
      { label: "Voltar ao título", text: "Esc" },
    ],
    notes: ["A garrafa explode se o medidor encher. Cada portão verde reduz cinco segundos uma vez."],
  },
  "pittari-tetromino": {
    title: "Tetraminó perfeito",
    catch: "Monte exatamente a forma-alvo em dez desafios cronometrados.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "É um jogo normal de blocos que caem?" },
      {
        speaker: "akao",
        text: "São dez desafios em que você deve montar exatamente a forma mostrada usando tetraminós.",
      },
      { speaker: "onaga", text: "Então não é só apagar linhas. O que acontece depois?" },
      {
        speaker: "akao",
        text: "Nos últimos desafios, você precisa apagar linhas específicas enquanto prepara a forma final. A ordem importa.",
      },
      { speaker: "onaga", text: "Parece difícil. Posso praticar?" },
      {
        speaker: "akao",
        text: "Há modos EASY e HARD. Aperte R para refazer o desafio e registre seu tempo em rankings separados.",
      },
    ],
    features: [
      "Dez desafios para copiar exatamente a forma-alvo",
      "Desafios finais exigem planejar linhas apagadas",
      "Modos EASY e HARD",
      "Ranking de tempo por modo",
    ],
    controls: [
      { label: "Mover", text: "Setas esquerda/direita ou A/D" },
      { label: "Descida suave", text: "Seta para baixo ou S" },
      { label: "Girar", text: "Z, X ou seta para cima" },
      { label: "Queda rápida", text: "Space" },
      { label: "Reserva", text: "C" },
      { label: "Refazer desafio", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Acerte notas estimulantes e entre no DOPA TIME durante 120 segundos.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "Que tipo de jogo de ritmo é DOPARHYTHM?" },
      {
        speaker: "akao",
        text: "Use A, S, D e F para acertar notas coloridas e sobreviva por 120 segundos.",
      },
      { speaker: "onaga", text: "Também há notas pretas com X. Eu aperto?" },
      {
        speaker: "akao",
        text: "Evite no modo normal. No modo DOPA, use J, K, L e ponto e vírgula para rejeitar as notas negativas.",
      },
      { speaker: "onaga", text: "O que acontece no DOPA TIME?" },
      {
        speaker: "akao",
        text: "Encha FEVER para receber notas longas em todas as pistas. Aperte todas as teclas rapidamente. Se DOPA chegar a zero, acabou.",
      },
    ],
    features: [
      "Dispute pontos durante 120 segundos",
      "Quatro teclas no normal e oito no DOPA",
      "Encha FEVER para entrar no DOPA TIME",
      "Rankings EASY e HARD",
    ],
    controls: [
      { label: "Notas coloridas normais", text: "A, S, D, F da esquerda para a direita" },
      { label: "Notas negativas normais", text: "Evite sem apertar" },
      { label: "Notas coloridas DOPA", text: "A, S, D, F da esquerda para a direita" },
      { label: "Notas negativas DOPA", text: "J, K, L, ; da esquerda para a direita" },
    ],
    notes: ["Acertos aumentam combo e FEVER; notas coloridas recuperam DOPA. Erros e teclas incorretas reduzem DOPA. DOPA também cai com o tempo; erros, teclas sem nota e teclas erradas reduzem ainda mais. Durante DOPA TIME, ele não diminui."],
  },
  "castle-pazzle": {
    title: "CASTLE PAZZLE",
    catch: "Memorize três castelos e reconstrua-os neste desafio 3D contra o tempo.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "Que tipo de jogo de construir castelos é CASTLE PAZZLE?" },
      {
        speaker: "akao",
        text: "Em cada desafio, memorize um castelo e reconstrua-o com as peças. São três desafios consecutivos.",
      },
      { speaker: "onaga", text: "Posso continuar olhando os modelos enquanto construo?" },
      {
        speaker: "akao",
        text: "No Easy, você pode rever o modelo, mas precisa esperar entre consultas. No Hard, não é possível revê-lo depois de começar a construção.",
      },
      { speaker: "onaga", text: "Então memorizar rápido importa tanto quanto construir rápido." },
      {
        speaker: "akao",
        text: "Exatamente. O tempo termina quando os três castelos ficam prontos, e há um modo Hard para um desafio maior.",
      },
    ],
    features: [
      "Quebra-cabeça 3D para memorizar e reconstruir três castelos",
      "No Easy, consulte o modelo várias vezes, com um intervalo de espera entre consultas",
      "No Hard, os modelos não podem ser vistos novamente após o início da construção",
      "Arraste as peças soltas para o chão ou sobre outras partes do castelo",
      "Gire as peças e a câmera para descobrir a posição e a orientação certas",
      "Rankings on-line separados para os modos Easy e Hard",
    ],
    controls: [
      { label: "Colocar peça", text: "Arraste para o chão ou sobre o castelo" },
      { label: "Girar peça", text: "Tecla R ou roda do mouse" },
      { label: "Giro inverso", text: "Tecla Q" },
      { label: "Girar câmera", text: "Arraste com o botão direito, arraste à esquerda no espaço vazio ou use as setas" },
    ],
    notes: ["Reproduza os três castelos como nos modelos e busque o melhor tempo."],
  },
  "coffee-milk": {
    title: "Café com leite",
    catch: "Acerte pela cor três cafés ao mesmo tempo e sirva tudo em 60 segundos.",
    genre: "Arcade",
    dialogue: [
      { speaker: "onaga", text: "Como funciona Café com leite?" },
      {
        speaker: "akao",
        text: "Você tem 60 segundos para cuidar de três faixas ao mesmo tempo e adicionar leite até cada café chegar à intensidade pedida.",
      },
      { speaker: "onaga", text: "Não tem medidor, então preciso julgar só pela cor?" },
      {
        speaker: "akao",
        text: "Isso. Segure D, Espaço ou K para colocar leite e solte quando a cor estiver certa. Tente alcançar a maior pontuação.",
      },
    ],
    features: [
      "Desafio de pontuação de 60 segundos em uma cafeteria",
      "Três faixas atendidas simultaneamente",
      "Intensidade do café ajustada usando apenas a cor",
      "Serviço rápido para buscar a maior pontuação",
    ],
    controls: [
      { label: "Faixa esquerda", text: "Segure D para servir leite e solte para entregar" },
      { label: "Faixa central", text: "Segure Espaço para servir leite e solte para entregar" },
      { label: "Faixa direita", text: "Segure K para servir leite e solte para entregar" },
    ],
  },
  "spellbreak-endless-curse": {
    title: "SPELLBREAK!",
    catch: "Segure a parede amaldiçoada que avança neste quebra-blocos mágico infinito.",
    genre: "Ação",
    dialogue: [
      { speaker: "onaga", text: "SPELLBREAK! é um quebra-blocos com magia?" },
      {
        speaker: "akao",
        text: "Rebata a esfera mágica, quebre blocos e use a mana obtida para melhorar cinco feitiços neste desafio infinito.",
      },
      { speaker: "onaga", text: "Então a parede amaldiçoada avança com o tempo." },
      {
        speaker: "akao",
        text: "Exatamente. Mantenha a sequência, evolua seus feitiços e busque a maior pontuação antes que a parede alcance você.",
      },
      { speaker: "onaga", text: "Como os feitiços são usados?" },
      {
        speaker: "akao",
        text: "Você não lança os feitiços manualmente. Quando acumular mana suficiente, escolha uma melhoria entre até três cartas; o feitiço escolhido é ativado automaticamente quando suas condições são cumpridas. Basta manter a sequência e acumular melhorias.",
      },
    ],
    features: [
      "Quebra-blocos mágico infinito com uma parede amaldiçoada que avança",
      "Quebre blocos, colete mana e escolha melhorias entre até três cartas de feitiço",
      "Cinco feitiços: explosão de fogo, relâmpago em cadeia, prisão de gelo, esfera fantasma e raio arcano",
      "Após 12 melhorias, a esfera normal se divide em duas",
      "Mantenha sequências e combinações mágicas para subir no ranking",
    ],
    controls: [
      { label: "Mover", text: "Mouse, setas esquerda/direita ou A/D" },
      { label: "Iniciar/lançar", text: "Espaço, Enter ou clique esquerdo" },
      { label: "Cartas de feitiço", text: "Escolha com as setas ou WASD e confirme com Enter; também é possível clicar ou usar 1, 2 e 3" },
      { label: "Pausa/reinício", text: "Esc para pausar e R para reiniciar" },
    ],
  },
  "nazotoki-10s": {
    title: "Quebra-cabeça de 10s",
    catch: "Crie dez números 10 para concluir esta aventura de lógica e cálculo.",
    genre: "Quebra-cabeça",
    dialogue: [
      { speaker: "onaga", text: "O que significa 10s no título?" },
      {
        speaker: "akao",
        text: "Você termina ao criar dez números 10. Combine números limitados com operações básicas.",
      },
      { speaker: "onaga", text: "Parece fácil se é só combinar números..." },
      {
        speaker: "akao",
        text: "Alguns problemas não formam 10 de imediato. Encontre símbolos de operação escondidos na tela.",
      },
      { speaker: "onaga", text: "Existe um tempo-alvo?" },
      {
        speaker: "akao",
        text: "O objetivo é 20 minutos. Você consegue resolver tudo a tempo?",
      },
    ],
    features: [
      "Mistura única de lógica e aritmética",
      "Controles simples por toque",
      "Dicas e explicações completas",
      "Tempo-alvo de 20 minutos",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Reversi em tempo real com uma jogada a cada três segundos.",
    genre: "Tabuleiro",
    dialogue: [
      { speaker: "onaga", text: "No Reversi, os jogadores se alternam, certo?" },
      {
        speaker: "akao",
        text: "Aqui não há turnos. Quando sua espera de três segundos termina, você pode jogar.",
      },
      { speaker: "onaga", text: "Então devo jogar o mais rápido possível?" },
      {
        speaker: "akao",
        text: "Esse é o dilema. Jogar agora ou esperar o rival: o tempo adiciona uma nova camada ao tabuleiro.",
      },
      { speaker: "onaga", text: "Posso jogar sozinho?" },
      {
        speaker: "akao",
        text: "Treine contra a CPU, jogue com amigos por ID de sala ou enfrente rivais cada vez mais fortes no modo Sobrevivência.",
      },
    ],
    features: [
      "Reversi em tempo real com espera de três segundos",
      "CPU e partidas com amigos por ID de sala",
      "Sobrevivência contra CPU cada vez mais forte",
      "Habilidades como Pedra Livre que ignora a espera",
      "Replays para revisar partidas",
    ],
    notes: ["Uma versão rápida e diferente de Reversi. Download grátis com compras no app e vários idiomas."],
  },
  "bachitto-pose": {
    "title": "Bachitto Pose!",
    "catch": "Acerte a pose, atravesse a parede — ou caia na água!",
    "genre": "Ação",
    "dialogue": [
      {
        "speaker": "onaga",
        "text": "Será que eu passo nesse buraco? Quanto mais a parede chega perto, mais eu me atrapalho!"
      },
      {
        "speaker": "akao",
        "text": "Passar com a pose certinha é muito gostoso. Só que a próxima parede troca as opções, então não dá para relaxar."
      },
      {
        "speaker": "onaga",
        "text": "Dá vontade de se exibir depois de acertar! Mas um erro e eu vou parar na água…"
      },
      {
        "speaker": "akao",
        "text": "Os aplausos e o mergulho lembram um programa de auditório. Você sempre quer tentar de novo para passar só mais uma parede."
      }
    ],
    "features": [
      "Observe o recorte da parede e escolha a pose certa entre quatro opções",
      "As opções mudam a cada parede, e os acertos seguidos aumentam a velocidade",
      "A pose correta deixa você passar; um erro joga você para trás, direto na água",
      "Rufos de tambor, aplausos e ranking online de paredes atravessadas em sequência"
    ],
    "controls": [
      {
        "label": "Escolher pose",
        "text": "↑ / ← / ↓ / → ou clique em uma carta na parte inferior"
      },
      {
        "label": "Começar / Tentar de novo",
        "text": "Espaço / Enter ou o botão na tela"
      },
      {
        "label": "Voltar ao título",
        "text": "Esc na tela de resultados"
      },
      {
        "label": "Ligar / Desligar som",
        "text": "M ou o botão de som no canto superior direito"
      }
    ],
    "notes": [
      "Escolha a forma do buraco antes de a parede chegar e tente superar sua melhor sequência.",
      "Recomendado para navegadores de computador. O jogo está em japonês."
    ]
  },
  "tsukkomi-dojo": {
    "title": "Tsukkomi Dojo",
    "catch": "Seu parceiro solta a piada; você rebate no tempo certo!",
    "genre": "Comédia",
    "dialogue": [
      {
        "speaker": "onaga",
        "text": "Tsukkomi Dojo? É um treino pra quem dá a resposta na dupla?"
      },
      {
        "speaker": "akao",
        "text": "É um jogo de manzai em que você rebate as piadas do seu parceiro Masaru com a própria voz. Ele finge ser atendente de loja de conveniência, com um atendimento meio fora do lugar."
      },
      {
        "speaker": "onaga",
        "text": "Resposta rápida? Essa é a minha especialidade!"
      },
      {
        "speaker": "akao",
        "text": "Uma IA julga a sua resposta, e isso decide o quanto a plateia vai se animar."
      },
      {
        "speaker": "onaga",
        "text": "Uma IA de jurada? Com as minhas respostas, a plateia vai rolar de rir!"
      }
    ],
    "features": [
      "Um jogo de manzai em que você dá a resposta (tsukkomi) às piadas de Masaru com a própria voz",
      "Uma IA julga a precisão; aponte o absurdo com exatidão e acrescente uma sacada para a nota máxima",
      "O tempo ideal é de 0,3 a 1 segundo após a piada; cedo ou tarde demais, não tem graça",
      "Acertou, a plateia gargalha; errou, silêncio total… Esquete de comédia num palco de teatro tradicional",
      "Depois das sete piadas, o júri dá a avaliação final. Mire no título \"Melhor tsukkomi do país\""
    ],
    "controls": [
      {
        "label": "Jogar por voz",
        "text": "Depois de cada piada, rebata no microfone. Abra o jogo pelo \"別タブで開く\" (abrir em outra aba) na página do unityroom e permita o microfone"
      },
      {
        "label": "Jogar por texto",
        "text": "Digite a resposta na caixa que aparece depois da piada e pressione Enter. O tempo conta a partir do momento em que você começa a digitar"
      },
      {
        "label": "Jogar de novo",
        "text": "\"もう一度\" ou \"タイトルへ\" na tela de resultados"
      }
    ],
    "notes": [
      "Cerca de 3 minutos por partida. Se não puder falar, também dá para digitar.",
      "Uma IA é usada para julgar as respostas. O texto da sua resposta (ou o texto reconhecido, na voz) é enviado a um servidor de avaliação.",
      "Recomendado o Chrome no computador. O jogo está em japonês e o reconhecimento de voz só aceita japonês."
    ]
  },
};
