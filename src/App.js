
import axios from 'axios'
import Loading from './components/loading';
import Tours from './components/tours'
import { useEffect, useState } from 'react';

function App() {
  //Api
  const url = 'https://course-api.com/react-tours-project'

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id)=>{
    const filterTour = tours.filter((item) => item.id !==id)
    setTours(filterTour)
  }
  const gettingTours = async ()=>{
    setLoading(true)
    const data =  axios.get(url)
    await data.then((response)=>{
      setTours(response.data)
      console.log(response.data)
    })
    setLoading(false)
  }

  useEffect(()=>{
    gettingTours()
  }, [url])
  
  
  if(loading){
    return(
      <Loading/>
    )
  }

  return(
    <>
    <Tours tours={tours} removeTour={removeTour}/>
    </>
  )
}

export default App;
