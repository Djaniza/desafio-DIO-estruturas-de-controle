//Diferente do desafio anterior, utilizei elementos que ainda não foram apresentados para turma.

//Variável que recebe e armazena os dados dos heróis.
let heroes = [
    { name: "Black Panther", win: 10, lost: 5 },
    { name: "Wonder Woman", win: 20, lost: 3 }
]

//função que recebe os dados dos heróis e retorna o nível
function getHeroLevel(name, win, lost) {
    const heroLevel = [
        {level: "Ferro", min: -(Infinity), max: 10},
        {level: "Bronze", min: 11, max: 20},
        {level: "Prata", min: 21, max: 50},
        {level: "Ouro", min: 51, max: 80},
        {level: "Diamante", min: 81, max: 90},
        {level: "Lendário", min: 91, max: 100},
        {level: "Imortal", min: 101, max: Infinity}
    ]

    //verifica se os valores passados a função são válidos, se não forem, retorna uma mensagem de erro.
    if (typeof win !== 'number' || typeof lost !== 'number') {
        return console.error("Os valores de vitória e derrota devem ser números.");
    }

    const points = win - lost

    for (const level of heroLevel) {
        if (points >= level.min && points <= level.max) {
            return console.log(`O Herói tem um saldo de ${points}, está no nível ${level.level}`);
        }
    }

    return console.log("Nível não encontrado");
}

getHeroLevel(heroes[0].name, heroes[0].win, heroes[0].lost)
getHeroLevel(heroes[1].name, heroes[1].win, heroes[1].lost)