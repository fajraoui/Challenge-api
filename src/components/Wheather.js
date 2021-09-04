import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWheather } from '../redux/actions/action'
import Navbar from './Navbar'
import Loading from './Loading'
import Card from './Card'

const Wheather = () => {
    const dispatch = useDispatch()
    const cityWheather = useSelector(state => state.reducer.cityWheather)
    console.log(cityWheather)
    const loading = useSelector(state => state.reducer.Loading)
    const [query, setQuery] = useState("gafsa")
    useEffect(() => {
        dispatch(getWheather(query))
    }, [query])
    return (
        <div>
         {loading?
         <div> 
          <h3>Loading</h3> <Loading/>
          </div>
         :
         <div> 
        <Navbar onChange={(e) => setQuery(e.target.value)} />
        {cityWheather.map(el => <Card el={el} key={el.location.localtime_epoch} />)}
            
        </div>
        }
        </div>

    )
}

export default Wheather
