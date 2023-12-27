import React, { useState, useEffect,useCallback } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading,setLoading]=useState(true)

  const [isTours,setTours]=useState([])

  const handleRemove=(id)=>{
    const removeTour=isTours.filter((tour)=>tour.id!==id)
    setTours(removeTour)
  }

  const fetchTour=useCallback(async()=>{
    setLoading(true)
    let response=await fetch(url)
    let data=await response.json()
    setTours(data)
    setLoading(false)
    
    console.log(data);
  },[])
 useEffect(()=>{
  fetchTour()
 
 },[fetchTour])


  if(isLoading){
  return <Loading/>
  }
if(isTours.length===0){
  return <main onClick={()=>fetchTour()}>
    <div className="title">
      <h3>no tour left</h3>
    <button className='btn'>refresh</button>
     
    </div>
    </main>
}
  return  <main>
<Tours isTours={isTours} handleRemove={handleRemove} />
  </main>
}

export default App
