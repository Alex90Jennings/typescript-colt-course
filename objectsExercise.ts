type Movie = {
    readonly title: string,
    originalTitle?: string,
    director: string,
    releaseYear: number,
    boxOffice: {
        budget: number,
        grossUS: number,
        grossWorldwide: number
    }
}

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789
    }
}

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348
    }
}

function getProfit(movie: Movie): number {
    const bo = movie.boxOffice
    return bo.grossWorldwide - bo.budget
}

console.log(`Cats made ${getProfit(cats)}, Dune made ${getProfit(dune)}`)