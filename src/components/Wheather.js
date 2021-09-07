import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWheather } from "../redux/actions/action";

import Loading from "./Loading";
import {Button, Input } from "semantic-ui-react";
import Card from "./Card";
import Forecast from "./Forecast"
import { Link } from "react-router-dom";

const Wheather = () => {
  const dispatch = useDispatch();
  const cityWheather = useSelector((state) => state.reducer.cityWheather);
  console.log(cityWheather);
  const loading = useSelector((state) => state.reducer.Loading);
  const [query, setQuery] = useState("gafsa");
  useEffect(() => {
    dispatch(getWheather(query));
  }, [query]);
   
  return (
    <div>
      {loading ? (
        <div>
          <h3>Loading</h3> <Loading />
        </div>
      ) : (
        <div>
          
          <div>
          <h2>Enter your position</h2>
          <Input
            onChange={(e) => setQuery(e.target.value)}
            action={{ icon: "search" }}
            placeholder="Search..."
          />
          </div>
          
          <Card
            el={cityWheather}
          /> 
          <Forecast data={cityWheather}/>
        </div>
      )}
    </div>
  );
};

export default Wheather;
