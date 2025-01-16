import React from 'react'
import '../styles/home.scss'
import { Button } from '../components/Home/Button'

export const Home = () => {
  return (
    <div className='home'>
      <h2 className='home__titr'>Click to view the list of users</h2>
      <Button link={'users'}/>
    </div>
  )
}
