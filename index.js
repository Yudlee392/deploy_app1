import express from 'express'
import authRouter from './src/routes/auth.routes.js'
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api', authRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
