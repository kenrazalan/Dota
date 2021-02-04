import axios from 'axios'

const api = "https://api.opendota.com/api/proPlayers"
const hero = "https://api.opendota.com/api/heroes"

export const FetchData =async()=>{
    // setData(await axios.get(`${api}`))
    return await axios.get(`${api}`)
   }

   export const FetchHero = async()=>{

    return await axios.get(hero)
   }
   