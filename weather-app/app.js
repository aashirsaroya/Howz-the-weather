const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



const loc = process.argv[2]
if(process.argv.length === 2)
return console.log('Please provide a Location!')
geocode(process.argv[2], (error, data)=> {
     if(error)
     {
       return console.log(error)
     }

  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if(error)
      {
        return console.log(error)
      }
      
      console.log(data.location)
      console.log(forecastData)
    })

})



