import React, { useState } from 'react'

export default function Search(){
    const [pName, setPName] = useState('')
    console.log(pName)
    // let test = async () => {
    //     try{
    //         let res = await fetch(`https://pokeapi.co/api/v2/pokemon/clefairy/`)
    //         let results = await res.json()
    //         console.log(results)
    //         // console.log(results.name)
    //         // return results
    //     }catch(error){
    //         console.log(error)
    //     }
    //   }
    //   test()
    return (
        <>
        <h1>Search Page</h1>
        <input type='text' value={pName} placeholder='Pokemon Name' onChange={(event) => {
            setPName(event.target.value)
        }}/>
        <button type='submit'>Go!</button>
        </>
    )
}