const express = require('express')
const app = express()
const PORT = 8000

const team = {
  'ac-milan' : {'name': 'AC Milan',
    'year': 1899,
    'titles': 7,
    'location': 'Italy'
},
'fc-barcelona':{
    'name': 'FC Barcelona',
    'year': 1899,
    'titles':5 ,
    'location': 'spain'
},
'real-madrid':{
    'name': 'Real Madrid',
    'year':1902,
    'titles': 11,
    'location':'spain'
}
'unknown':{
    'name': 'unkown',
    'year':'unknown',
    'titles': 'unknown',
    'location':'unknown'
}

}
//app.get for the response on html
app.get('/', (request,response)=> {
    response.sendFile(__dirname + '/index.html')
})

//want to ping the server
app.get('/api/:club', (request,response)=>{
    //request new assigned variable with parameters and the clubs
  const clubName= request.params.club.toLowerCase()
  if( team[clubName]){
    response.json(team[clubName])
  } else{
      response.json(team['unknown'])
  }
  
})
// app.listen for for the host to go live
app.listen(PORT, ()=> {
    console.log(`the server is now running on port ${PORT}! Betta go catch it!`)
})