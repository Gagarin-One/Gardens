import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getArrayOfProducts,getProductItem  } from "../../Reducer.tsx";
import s from './Products.module.scss'
import { StateType } from '../../Redux/Redux';

const Products = ({ArrayOfProducts,request}) => {
  let dispatch = useDispatch()

  useEffect(() =>{
    dispatch(request())
  },[])
  
  return (
    <div className={s.wrapper}>
      {ArrayOfProducts.map((item) => {return <div key={item.id} className={s.ProductWrapper}>
        <NavLink style={{ textDecoration: 'none' }} to={`/Products/${item.data.ProductId}`}>
          <div>
            <img src={item.data.image}/>
            <div>{item.data.title}</div>
            <b>{item.data.price}</b>
          </div>
        </NavLink>

      </div>
      })}
    </div>
  )
}
export default Products