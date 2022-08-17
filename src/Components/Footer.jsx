import React from 'react'
import { ReactComponent as CatLogo } from '../logo.svg'

const Footer = () => {
  return (
    <div className='rounded-3xl bg-black text-white p-5 mt-5'>
      <div className='flex flex-col justify-center items-center'>
        <CatLogo fill='white' />
        <h1>created by mragil - dev.Challenge.io 2022</h1>
      </div>
    </div>
  )
}

export default Footer