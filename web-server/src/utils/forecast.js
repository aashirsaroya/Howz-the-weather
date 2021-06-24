const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b97d3b0d6d9965c0399bf72896d0f5dd&query='+latitude+','+longitude
  request({url,json: true},(error, {body}) => {
      if(error)
      {
        callback('Unable to connect to weather service!',undefined)
      }
      else if(body.error)
      {
        callback('Unable to find location',undefined)       
    }
      else
      {

        callback(undefined,'It is currently ' + body.current.temperature +". It feels like "+ body.current.feelslike + " outside")
        // console.log('It is currently ' + response.body.current.temperature +". It feels like "+ response.body.current.feelslike + " out")
        // console.log(response.body.current.temperature)
        // console.log(response.body.current.weather_descriptions[0])
      }
  })
}

module.exports = forecast