import React from 'react';
import { Placeholder } from 'react-bootstrap';

import '../css/PjCard.css';
import '../css/modalUtils.css';

function CardPlaceholder() {
  return (
    <div id="pjListBlank">          
      <Placeholder animation="wave" id="pjCardBlank">    
          <Placeholder as="h3" animation="glow" className="BlankH3">
            <Placeholder style={{ width : '100pt' }} />
          </Placeholder>   

    <div id='pjDetails'>
        <div>
            <Placeholder as='img' animation="glow" className="blankImg"/>
        </div>

      <Placeholder animation="glow">
        <Placeholder className="btn btn-outline-light" id="BlankButton" />
      </Placeholder>

        </div>
      </Placeholder>      
    </div>
  )
}

export default CardPlaceholder