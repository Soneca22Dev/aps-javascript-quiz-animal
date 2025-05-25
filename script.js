alert("🐾 Bem-vindo ao Quiz Animal! 🐾\nDescubra qual animal espiritual combina com sua personalidade!");

const nome = prompt("Qual é o seu nome?").trim();
let idade = parseInt(prompt("Quantos anos você tem?"));

if (isNaN(idade) || idade <= 0) {
    alert("Idade inválida! Vamos considerar que você tem 20 anos.");
    idade = 20;
}

function fazerPergunta(pergunta, opcoes) {
    let resposta = prompt(`${pergunta}\n${opcoes.join("\n")}`).toLowerCase();
    
    while (!opcoes.map(o => o.split(")")[0].trim()).includes(resposta)) {
        resposta = prompt(`Resposta inválida! ${pergunta}\n${opcoes.join("\n")}`).toLowerCase();
    }
    
    return resposta;
}

function calcularAnimalEspiritual(respostas) {
    const animais = [
        { nome: "Leão", caracteristicas: ["a", "a", "a"] },
        { nome: "Coruja", caracteristicas: ["a", "b", "b"] },
        { nome: "Golfinho", caracteristicas: ["b", "a", "b"] },
        { nome: "Lobo", caracteristicas: ["b", "b", "a"] },
        { nome: "Tartaruga", caracteristicas: ["b", "b", "b"] }
    ];
    
    for (const animal of animais) {
        if (JSON.stringify(animal.caracteristicas) === JSON.stringify(respostas)) {
            return animal.nome;
        }
    }
    
    return "Fênix";
}

const perguntas = [
    {
        texto: "Em seu tempo livre, você prefere:",
        opcoes: ["a) Socializar com amigos", "b) Ler um livro ou assistir algo sozinho"]
    },
    {
        texto: "Quando enfrenta um problema, você:",
        opcoes: ["a) Age rapidamente", "b) Pensa cuidadosamente antes de agir"]
    },
    {
        texto: "Qual desses ambientes você prefere?",
        opcoes: ["a) Lugares abertos e ensolarados", "b) Lugares tranquilos e sombreados"]
    }
];

const respostas = [];

const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
const mensagemIdade = idade >= 30 
    ? "Você tem muita experiência de vida!" 
    : "Você ainda tem muita vida pela frente!";

alert(`Ótimo, ${nomeFormatado}! ${mensagemIdade}\nVamos começar o quiz!`);

for (const pergunta of perguntas) {
    const resposta = fazerPergunta(pergunta.texto, pergunta.opcoes);
    respostas.push(resposta);
}

const animalEspiritual = calcularAnimalEspiritual(respostas);

function gerarDescricaoAnimal(animal) {
    const descricoes = {
        "Leão": "Você é naturalmente líder, corajoso e protetor. Como um leão, você inspira respeito e confiança.",
        "Coruja": "Sábio e observador, você vê o que outros perdem. Sua intuição é sua maior força.",
        "Golfinho": "Inteligente, brincalhão e sociável. Você traz alegria e harmonia para qualquer grupo.",
        "Lobo": "Leal, forte senso de família e comunidade. Você valoriza seus laços acima de tudo.",
        "Tartaruga": "Paciente, resiliente e sábio. Você sabe que devagar se vai ao longe.",
        "Fênix": "Transformador e renascedor. Você supera desafios e emerge mais forte das adversidades."
    };
    
    return descricoes[animal] || "Um espírito livre e único, que não pode ser facilmente definido!";
}

const mensagemFinal = `\n🎉 ${nomeFormatado}, seu animal espiritual é... ${animalEspiritual.toUpperCase()}! 🎉\n\n` +
    `Significado:\n${gerarDescricaoAnimal(animalEspiritual)}\n` +
    `Obrigado por jogar! 🐾`;

alert(mensagemFinal);
