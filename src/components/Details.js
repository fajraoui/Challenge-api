import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// import { getWheather } from '../redux/actions/action';
import DetailCard from './DetailCard';

const Details = () => {
    // const dispatch = useDispatch()
    const details = useSelector(state => state.reducer.cityWheather);
    const detail=details.forecast&&details.forecast.forecastday[0];
    // useEffect(() => {
    //     dispatch(getWheather());
    //   }, []);
    return (
        <div className='A'>
         {detail!=null?
         <div>
             
         <DetailCard detail={detail}/>
         <Link to='/'> 
          <Button color='violet'>Back</Button>
          </Link>
          </div>:<h1>Hello </h1>}
          
        </div>
    )
}

export default Details
