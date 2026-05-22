import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css';
import loader from '../../assets/Image/loader.gif'
export default function Loader() {

  let [count, setCount] = useState(0)
  useEffect(() => { }, [])
  return (
    <>
      <div className='fixed top-0 bottom-0 z-50 left-0 right-0 bg-black flex justify-center items-center'>
       <img src={loader} alt="Loader" />
      </div>
    </>
  )
}
