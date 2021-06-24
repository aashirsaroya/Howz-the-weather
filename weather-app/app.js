const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



const loc = process.argv[2]
if(process.argv.length === 2)
return console.log('Please provide a Location!')
geocode(process.argv[2], (error, {latitude, longitude, location} = {})=> {
     if(error)
     {
       return console.log(error)
     }

  
    forecast(latitude, longitude, (error, forecastData) => {
      if(error)
      {
        return console.log(error)
      }
      
      console.log(location)
      console.log(forecastData)
    })

})



