/* Esta variável foi escrita como uma matriz para que posteriormente possam ser inseridos outros heróis
mantendo a estrutura como uma matriz. O uso da matriz foi feito para manter o código no nível do conhecimento
 que foi apresentado para a turma, considerando que esse é um bootcamp para iniciantes*/

let hero = [
    ["Hércules", 9005],
    ["Batman", 5002]
]


function findLevel(xp, name) {
    let message = `O Herói de nome ${name} está no nível de `

/* Obs 1: O uso do if se justifica pois o switch case não compara intervalos em javascript,
o laço for seria possível mas, mais complicado e o código ficaria mais difícil de ler.*/

/* Obs 2: Se o herói tiver pontos de vida entre 5001 e 6000, o nível não está na "tabela" que foi
proposta, para não atribuir um valor arbitrário preferi deixar como uma mensagem de erro."*/

    if(0 < xp && xp < 1001) {
        console.log(message + "Ferro")
    } else if(1000 < xp && xp < 5001) {
        console.log(message + "Prata")
    } else if(6000 < xp && xp < 7001) {
        console.log(message + "Ouro")
    } else if(7000 < xp && xp < 8001) {
        console.log(message + "Platina")
    } else if(8000 < xp && xp < 9001) {
        console.log(message + "Ascendente")
    } else if(9000 < xp && xp < 10001) {
        console.log(message + "Imortal")
    } else if(xp > 10000) {
        console.log(message + "Radiante")
    } else {
        console.log("Não foi possível definir o nível do Herói.")
    }
}

findLevel(hero[0][1], hero[0][0])
findLevel(hero[1][1], hero[1][0])
