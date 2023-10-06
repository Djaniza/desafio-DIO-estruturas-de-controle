let attackType

class Hero{
    constructor(nome, idade, tipo) {
        this.name = nome
        this.age = idade
        this.type = tipo
    }

    atacar() {
        switch (this.type) {
            case "mago":
                attackType = "magia"
                break
            case "guerreiro":
                attackType = "espada"
                break
            case "monge":
                attackType = "artes marciais"
                break
            case "ninja":
                attackType = "shuriken"
                break
            default:
                attackType = null
        }
        console.log(`o ${this.type} atacou usando ${attackType}`)
    }
}

const mage = new Hero("Merlim", "254", "mago")
const warrior = new Hero("Conan", "24", "guerreiro")
const monk = new Hero("Buda", "2200", "monge")
const ninja = new Hero("Jiraya", "18", "ninja")


mage.atacar()
warrior.atacar()
monk.atacar()
ninja.atacar()
