const handlers = ({ axios }, api ) => ({
    get: async (req, res) => {
        const { data } = await axios.get(api)

        res.status(200).send(data)
    },
    post: async (req, res) => {
        const { body } = req
        const { data } = await axios.post(api, body)
        
        res.status(201).send(data)
    },
    put: async (req, res) => {
        const { body } = req
        const { id } = req.params
        await axios.put(`${api}/${id}`, body)
        
        res.sendStatus(204)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await axios.delete(`${api}/${id}`)
        
        res.sendStatus(204)
    }
})

module.exports = handlers