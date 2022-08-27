class Player {
    score: number = 0

    constructor (public first: string, public last:string){
        this.first = first
        this.last = last
    }
}

const rina = new Player("Rina", "Jennings")
console.log(rina)