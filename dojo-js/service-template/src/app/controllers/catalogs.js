
module.exports.getTheatersById = (req, res) => {
    try {
        const modelMock = {
            theater: '11111',
            createdAt: '2020-01-01',
            expirateDate: '2020-01-01',
            status: true,
            movies: ['1', '2']
        }

        return res.json(modelMock)

    } catch (err) {
        console.log(err)

        return err
    }
}

module.exports.createMovie = (req, res) => {
    try {
        const modelMovieMock = {
            title: 'Titulo',
            overview: 'Descrição do filme',
            runtime: 2999,
            releaseDate: '14/01/1995',
            images: 'www.google.com/images/capadofilme',
            genres: ['drama', 'suspense']
        }

        return res.json(modelMovieMock)
    } catch (err) {
        return err
    }
}

module.exports.updateMovieStatus = (req, res) => {
    try {
           
        const modelMovieMock = {
            title: 'Titulo',
            status: 2
        }
        
        return res.json(modelMovieMock)
    
    } catch (err) {
        return err
    }
}

module.exports.deleteMovie = (req, res) => {
    try {
           
        const modelMovieMock = {
            title: 'Titulo'
        }
        
        return res.json(modelMovieMock)
    
    } catch (err) {
        return err
    }
}
