import React from 'react'

import './loading.css'

function LoadingCircle() {

    const Lstyle = {
      width: '150px',
      height: '150px'      
    }    

  return (
    <div id="loadingDiv"> 
          <lord-icon 
              src="https://cdn.lordicon.com/dpinvufc.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#ffffff"
              style={Lstyle}>              
           </lord-icon>
    </div> 
  )
}

export default LoadingCircle