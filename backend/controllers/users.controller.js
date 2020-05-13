const User = require('./../models/user')

const handlers = ({ axios }, api ) => ({
    get: async (req, res) => {
        const { data } = await axios.get(api)

        res.status(200).send(data)
    },
    post: async (req, res) => {
        const { data: content } = await axios.get(api)
        req.body.id = content.length + 1
        const user = new User(req.body)
        await user.save(user)
        
        res.status(201).send(user)
    },
    put: async (req, res) => {
        const { id } = req.params
        await User.findOneAndUpdate(id, {$set: req.body})
        
        res.sendStatus(204)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await User.findOneAndDelete(id)
        
        res.sendStatus(204)
    }
})

module.exports = handlers