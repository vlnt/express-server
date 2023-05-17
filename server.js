const express = require('express')
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')

const PORT = process.env.PORT || 3700

const app = express()

app.use(credentials)
app.use(logger)
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/auth'))
app.use('/employees', require('./routes/api/employees'))
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/*', (req,res) => {
    res.status(404).send('404. Not Found')
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));