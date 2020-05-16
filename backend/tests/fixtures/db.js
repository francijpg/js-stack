const { connectDb, mongoose } = require('../../config/mongoose')
const { appConfig, dbConfig } = require('../../config/config')
const User = require('../../models/user')

const mockUsers = {
    _id: new mongoose.Types.ObjectId(),
    name: "Francisco",
    username: "franci",
    id: 11,
    created_at: "2020-04-16T00:56:21.000Z",
    updatedAt: "2020-04-16T00:56:21.000Z"
}

const setupDatabase = async () => {
    await connectDb(dbConfig)
    await User.deleteMany()
    await new User(mockUsers).save()
}

const appVersion = appConfig.version

module.exports = {
    mockUsers,
    appVersion,
    setupDatabase,
    User
}