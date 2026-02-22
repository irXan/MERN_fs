import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

const Cards = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const style = {
        background:theme == 'light'?'#fff':'#000',
        color:theme == 'light'?'#000':'#fff',
        padding:'20px'
    }
  return (
    <div style={style}>
        <h2><b>CARD COMPONENT</b></h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellendus, perferendis eius quibusdam ipsa earum, doloribus voluptate odio possimus ab itaque expedita molestias laboriosam id. Molestias nam aliquam ex minima corporis hic dolor placeat illo aliquid, maiores odit voluptates voluptate optio vel sint. Recusandae vero quibusdam hic ullam optio magnam!</p>

        <button className='bg-blue-400 py-2 px-4 rounded-lg text-[30px]' onClick={toggleTheme}>{theme}</button>
    </div>
  )
}

export default Cards
