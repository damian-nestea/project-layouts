const luckyMessages = [
  "A sorte está a seu favor hoje. Aproveite!",
  "Grandes desafios trazem grandes recompensas. Continue persistindo!",
  "Você é mais forte do que pensa. Acredite em si mesmo!",
  "Uma surpresa agradável está a caminho. Fique atento!",
  "A vida é uma jornada emocionante. Aproveite cada momento!",
  "Siga seus sonhos, eles o levarão a lugares maravilhosos.",
  "O sucesso está a poucos passos de distância. Não desista!",
  "Uma nova amizade irá iluminar seu dia.",
  "Boas notícias estão chegando. Esteja preparado!",
  "Acredite em milagres, eles acontecem todos os dias.",
  "Compartilhe seu sorriso com o mundo. Ele é contagiante!",
  "Uma viagem está próxima. Prepare-se para a aventura!",
  "O universo está conspirando a seu favor. Confie no processo.",
  "Uma oportunidade emocionante está prestes a bater à sua porta.",
  "Aprenda com os erros, cresça com as experiências.",
  "Seu talento único o torna extraordinário. Use-o sabiamente!",
  "Uma mudança positiva está prestes a acontecer em sua vida.",
  "Sua determinação abrirá portas antes consideradas impossíveis.",
  "O amor está ao seu redor. Abra o coração para recebê-lo!",
  "A criatividade fluirá em suas tarefas hoje. Aproveite!",
  "Uma jornada de mil milhas começa com um único passo. Avante!",
  "Seja corajoso para abraçar as mudanças que virão.",
  "Um novo começo está ao virar da esquina. Esteja pronto!",
  "A generosidade traz consigo uma recompensa inestimável.",
  "Acredite em si mesmo e os outros também acreditarão.",
  "A sorte acompanha os audaciosos. Arrisque-se!",
  "Você é capaz de superar qualquer obstáculo. Confie em si mesmo!",
  "A gratidão é a chave para abrir novas oportunidades.",
  "O otimismo é a luz que ilumina o caminho para o sucesso.",
  "A ajuda de um amigo está próxima. Abra-se para receber.",
  "Aprenda a aceitar o que não pode mudar e siga em frente.",
  "A dedicação e a persistência são os pilares do sucesso.",
  "A vida é cheia de possibilidades. Explore-as com entusiasmo!",
  "As melhores coisas da vida acontecem quando você menos espera.",
  "Um sorriso pode mudar o dia de alguém. Espalhe alegria!",
  "A sorte está no seu lado. Aposte em si mesmo!",
  "Grandes realizações começam com pequenos passos.",
  "O fracasso é apenas uma oportunidade para recomeçar.",
  "Confie na sua intuição. Ela o guiará na direção certa.",
  "A paciência é uma virtude. Aguarde o momento certo.",
  "Uma aventura emocionante está prestes a começar.",
  "Aprenda com o passado, mas viva o presente e construa o futuro.",
  "A simplicidade traz clareza e paz ao coração.",
  "Amar é a melhor maneira de ser amado. Doe amor ao mundo!",
  "Sua criatividade está prestes a atingir novos patamares.",
  "A sorte seguirá aqueles que agem com sabedoria.",
  "A vida é um presente precioso. Aproveite cada instante!",
  "Uma oportunidade única irá bater à sua porta em breve.",
  "O pensamento positivo é a chave para alcançar seus objetivos.",
  "O sucesso começa quando você acredita em si mesmo.",
  "Deixe a sua intuição guiá-lo ao longo do caminho.",
  "O esforço de hoje trará recompensas para o seu futuro.",
  "Não tenha medo de falhar. Isso faz parte do aprendizado.",
  "A simplicidade é a essência da verdadeira felicidade.",
  "O respeito e a gentileza abrem portas onde antes havia muros.",
  "Aproveite as pequenas coisas da vida, elas são as mais valiosas.",
  "O caminho para o sucesso é pavimentado com trabalho duro.",
  "Uma pessoa sábia aprende mais com os outros do que com si mesma.",
  "O destino está traçado, mas cabe a você escolher o caminho.",
  "Valorize o tempo com aqueles que ama. É um presente precioso.",
  "Seja grato pelas bênçãos que a vida lhe proporciona.",
  "O sorriso é a linguagem universal da felicidade.",
  "A compreensão e a empatia aproximam as pessoas.",
  "Uma nova oportunidade de crescimento está a caminho.",
  "O conhecimento é a chave para desvendar novos horizontes.",
  "A fé move montanhas. Acredite em algo maior do que você.",
  "Aprenda com os erros, mas não se prenda a eles. Avance!",
  "O amor é a resposta para qualquer desafio.",
  "A sorte favorece aqueles que agem com coragem.",
  "Acredite nas possibilidades e elas se tornarão realidade.",
  "Sua perseverança será recompensada. Continue firme!",
  "A vida é um livro em branco esperando para ser escrito.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Uma mente aberta abre portas para novas oportunidades.",
  "As melhores decisões são tomadas com o coração e a mente.",
  "A felicidade está no aqui e agora. Aproveite o momento!",
  "A sinceridade é a base para relacionamentos verdadeiros.",
  "A sorte segue aqueles que enfrentam seus medos de frente.",
  "A gratidão é a chave para uma vida plena e feliz.",
  "O entusiasmo é contagiante. Compartilhe-o com o mundo!",
  "Aprenda a se perdoar. Isso abrirá espaço para o crescimento.",
  "A paz interior é o tesouro mais valioso que você pode possuir.",
  "Sua jornada está apenas começando. Abrace as possibilidades!",
  "A confiança é o alicerce para construir relacionamentos sólidos.",
  "Aprenda a viver o presente sem se preocupar com o futuro.",
  "A sorte acompanha aqueles que cultivam boas ações.",
  "O perdão liberta o coração e abre espaço para o amor.",
  "O sucesso é a recompensa para aqueles que nunca desistem.",
  "A felicidade reside nas coisas simples da vida.",
  "O pensamento positivo atrai boas energias e oportunidades.",
  "Acredite em si mesmo e o mundo acreditará em você.",
  "A sorte favorece os audaciosos. Seja ousado!",
  "A empatia é a chave para construir relacionamentos duradouros.",
  "O carinho é a linguagem universal do amor.",
  "Sua jornada é única. Aproveite cada passo!",
  "A humildade abre portas para a sabedoria.",
  "A perseverança é a chave para alcançar seus objetivos.",
  "O equilíbrio é a chave para uma vida harmoniosa.",
  "A sorte está em todos os lugares. Abra os olhos para vê-la!",
  "A confiança em si mesmo é o primeiro passo para o sucesso.",
  "A compaixão é o antídoto para o ódio e a raiva.",
  "Aprenda a ver o lado positivo em todas as situações.",
  "A fé é a força que move montanhas.",
  "O amor é a resposta para todas as perguntas.",
  "A sabedoria está em ouvir antes de falar.",
  "A gratidão é o caminho para a felicidade.",
  "O respeito é a base para relacionamentos saudáveis.",
  "A coragem é o combustível para alcançar seus sonhos.",
  "Aprenda a apreciar a jornada, não apenas o destino final.",
  "O sucesso é construído com paciência e persistência.",
  "A alegria está nas coisas simples da vida.",
  "A esperança é a luz que ilumina os momentos mais sombrios.",
  "A gratidão transforma o que temos em suficiente.",
  "Aprenda com o passado, mas viva no presente.",
  "A sorte está dentro de você. Acredite no seu potencial!",
  "O conhecimento é a chave para o crescimento pessoal.",
  "A compreensão é o alicerce para a harmonia.",
  "A paciência é uma virtude valiosa. Exercite-a!",
  "A fé é o caminho para encontrar sentido na vida.",
  "A simplicidade é a chave para a verdadeira felicidade.",
  "Aprenda a ouvir o silêncio e encontrará respostas.",
  "O amor é a força mais poderosa do universo.",
  "A sorte acompanha aqueles que são gratos.",
  "Aprenda a se perdoar e dará espaço para crescer.",
  "A verdadeira riqueza está nas experiências, não nos bens materiais.",
  "A paciência é o segredo para superar os desafios.",
  "A generosidade traz alegria ao coração.",
  "O amor é o remédio para qualquer dor.",
  "A sorte segue quem segue o coração.",
  "Aprenda a enxergar o melhor nos outros.",
  "O otimismo é o combustível para a realização dos sonhos.",
  "A gratidão é a chave para a felicidade duradoura.",
  "O amor é a resposta para qualquer pergunta.",
  "A sorte está onde você menos espera. Esteja atento!",
  "Aprenda a abraçar a mudança com coragem.",
  "O sucesso é resultado de esforços persistentes.",
  "A generosidade enriquece a alma.",
  "A felicidade está na simplicidade da vida.",
  "A sorte está ao alcance de todos. Acredite!",
];
let randomMessage;

const title = document.querySelector("h1");
const legend = document.querySelector("p");
const cookieImage = document.querySelector("#cookieToOpen");
const message = document.querySelector("h3");
const cookieOpenedImage = document.querySelector("#cookieOpened");
const button = document.querySelector("button");

cookieImage.addEventListener("click", handleOpenCookie);
button.addEventListener("click", resetCookie);
document.addEventListener("keydown", resetByEnter);

function handleOpenCookie(event) {
  event.preventDefault();
  title.innerText = "Aqui está a sua sorte de hoje:";
  toggleHide();
  randomMessage =
    luckyMessages[Math.floor(Math.random() * luckyMessages.length)];
  message.innerText = randomMessage;
}

function resetCookie(event) {
  event.preventDefault();
  title.innerText = "Qual é a sua sorte de hoje?";
  toggleHide();
}

function resetByEnter(event) {
  if (event.key === "Enter" && !button.classList.contains("hide")) {
    title.innerText = "Qual é a sua sorte de hoje?";
    toggleHide();
  }
}

function toggleHide() {
  legend.classList.toggle("hide");
  cookieImage.classList.toggle("hide");
  message.classList.toggle("hide");
  cookieOpenedImage.classList.toggle("hide");
  button.classList.toggle("hide");
}
