import React from 'react'

function Footer(props) {
  return (
    <footer className='text-center user-select-none'>      
        <span className={props.tema? 'text-dark' : 'text-secondary' }> Copyright © Thalys 2023 </span>      
    </footer>
  )
}

export default Footer
