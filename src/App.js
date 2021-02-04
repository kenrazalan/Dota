import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {FetchData,FetchHero} from './api/index'

function App() {
  const [data,setData]= useState([])
  const [hero,setHero]= useState([])

  

  useEffect(()=>{
    
    const FetchDatas =async()=>{
      try {
        const aaa = await FetchData()
       
        setData(aaa.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    FetchDatas()

  },[])

  useEffect(()=>{
    const FetchData = async()=>{
      const aaa = await FetchHero()
      setHero(aaa.data)
    } 
    FetchData()
  },[])

    console.log(hero)
    const datas =  data.slice(0,99)
    console.log(data.slice(0,99))
  
  return (
    <div className="App">
        {datas.map(a=>{
          return (
            <div className="container">
          <div className="details" key={a.account_id}> <p><b>Steam ID:</b> {a.steamid}</p>
                <img src={a.avatarfull}/>
                <p><b>Name :</b> {a.name}</p>
                <p><b>Team :</b> {a.team_name}</p>
                <a href={a.profileurl}><b>Profile Url</b></a>
                
                </div>
                </div>)
        })}
    </div>
  );
}

export default App;
