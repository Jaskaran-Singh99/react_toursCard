import Tour from './tour'

const Tours = ({tours, removeTour})=>{
    if(tours.length === 0){
         return <button onClick={()=> window.location.reload()}>REFRESH</button>
          
    }
    // console.log(tours.length)
    return(
        <>
        {
            tours.map((item)=>{
                 return  <Tour tour={item} key={item.id} removeTour={removeTour}></Tour>
            })
        }
    
        </>
    )
}

export default Tours