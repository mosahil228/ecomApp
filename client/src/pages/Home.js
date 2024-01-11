import React,{useEffect} from 'react'

const Home = ({setProgress}) => {
  
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress])
  return (
    <>
    <h1>home</h1>
    </>
  )
}

export default Home