const express = require('express')
const path = require('path')
const db = require('./config/connection');


const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ urlencoded: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  //testing
  let testUrl = `https://pokeapi.co/api/v2/pokemon/clefairy/`
  let test = async () => {
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/clefairy/`)
        let results = await res.json()
        console.log(results)
        return results
    }catch(error){
        console.log(error)
    }
  }
  test()

  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  })

