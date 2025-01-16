import React from 'react'
import './LayoutStyle.scss'

export const AppLayout = ({children}) => {
  return (
    <div className='container'>
        <header>header</header>
        <main>
            {children}
        </main>
        <footer>footer</footer>
    </div>
  )
}
