import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
<<<<<<< HEAD
import Products from '../Products/Products'
import s from './HomePage.module.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getArrayOfProducts,getFourProducts } from '../../Reducer'
=======
import Products from '../Products/Products.tsx'
import s from './HomePage.module.scss'
import {useSelector,useDispatch} from 'react-redux'
import { getArrayOfProducts,getFourProducts } from '../../Reducer.tsx'
>>>>>>> 21fa5505a223f75af8ff919ade0741e0a340a1aa
import { StateType } from '../../Redux/Redux';

const HomePage = () => {
  let FourProducts = useSelector((state:StateType) => state.MainReducer.FourProducts)
  return(
    <div>
  <div>
      <div className={s.FrontImage}>
        <img src='/Img/FrontImage.svg'/>
      </div>
      <div className={s.NavigationWithPictures}>
        <Link to='/Workshops'>
          <img className={s.workshop} src='/Img/1_Image_Navigate.png'/>
        </Link>
        <Link to='/About'>
          <img className={s.about} src='/Img/2_Image_Navigate.png'/>
        </Link>
        <Link to='/Contact'>
          <img className={s.contact} src='/Img/3_Image_Navigate.png'/>
        </Link>
        <Link to='/Spaces'>
          <img className={s.spaces} src='/Img/4_Image_Navigate.png'/>
        </Link>
        <NavLink style={{ textDecoration: 'none' }} className={s.shop} to='/Shop'>
          <div >SHOP</div>
        </NavLink>
      </div>
      <div className={s.commentWrapper}>
        <div className={s.comment}>
          <img width='29' height='29' src='/Img/quote.svg' />
          <p>We make the planteplaneter by handin Denmark</p>
        </div>
        <img src='/Img/for_comments.png'/>
      </div>
      <b className={s.Products}>Products</b>
      <div><Products ArrayOfProducts={FourProducts} request={getFourProducts}/></div>
      <div className={s.MoreButton}>
      <NavLink to='/Shop' style={{ textDecoration: 'none' }}>
        <div>SEE MORE</div>
      </NavLink>
      </div>
    </div> 
    </div> 
  )
}
export default HomePage