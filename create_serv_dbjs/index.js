const express = require('express')
const userRouter = require('./routers/user.routers')
//const postRouter = require('./routers/post.routers')

const PORT = process.env.PORT || 8000

const app = express()
app.use(express.json())
app.use('/api', userRouter)
//app.use('/api', postRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
