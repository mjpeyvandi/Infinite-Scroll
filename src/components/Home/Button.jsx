import React from 'react'
import { Link } from 'react-router-dom'

import './Button.scss'

export const Button = ({link}) => {
  return (
    <>
        <button className='home__button'>
            <Link to={`/${link}`} className='home__button__link'>
            Users
            </Link>
        </button>
    </>
  )
}
