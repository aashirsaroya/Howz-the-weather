const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/about', (req, res) => {
res.render('about', {
    title: 'About',
    name: 'Aashir Saroya'
})
})

app.get('/help', (req,res) => {
    res.render('help',{
        title: 'Help',
        name:'Aashir Saroya',
        helpText: 'Hi,we are here to solve all your problems!'
    })
})

app.get('', (req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Aashir Saroya'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title: 'Error 404',
        name: 'Aashir Saroya',
        errorMessage: 'Help Article not found'
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        title: 'Error 404',
        name: 'Aashir Saroya',
        errorMessage: 'Page not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})