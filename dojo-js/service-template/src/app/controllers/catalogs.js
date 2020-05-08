
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
