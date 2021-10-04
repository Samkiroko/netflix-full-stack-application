const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const movieRoute = require('./routes/movie')

dotenv.config()

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connection Successful'))
}

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)

app.listen(8800, () => {
  console.log('Backend server is running')
})
