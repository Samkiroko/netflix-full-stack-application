const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

main().catch((err) => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connection Successfull'))
}

app.listen(8800, () => {
  console.log('Backend server is running')
})
