const express = require('express')
const ejs = require('ejs')

const app = express()
const port = 9000

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/flower', (req ,res) => {
    res.render('flower')
})

app.listen(port, () => {
    console.log(`WebSite lisyen on port ${port}`)
})