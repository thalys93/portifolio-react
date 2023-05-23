import React from 'react'
import { Placeholder } from 'react-bootstrap'

function ProjetoPlaceholder() {
  return (
    <section id="ItemSectionBlank">
        <div className="blankTitleDiv">
          <div className="titleA">
          <Placeholder as='h3' animation="glow">
            <Placeholder className="BlankTxt70"/>                         
          </Placeholder>
          </div>           
          <div className="titleB">
          <Placeholder as="h5" animation="glow">
            <Placeholder className="BlankTxt40"/>            
          </Placeholder>
              <p className="line">|</p>
          <Placeholder as="h5" animation="glow">           
            <Placeholder            
            className="BlankTxt40"/>          
          </Placeholder>
          </div>
        </div>
        <div className="BlankDescription">          
            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>
            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>
            <Placeholder                      
            animation="glow"          
            as="p">
            <Placeholder className="pPlaceholder" />            
            </Placeholder>        
        </div>          
          <div className="projectTextBk">     
          <i><Placeholder as="i" id="BlankI" animation="wave" /></i>                    
             <p>|</p> 
             <Placeholder as="p" animation="glow">
              <Placeholder  className="BlankTxt60" />
            </Placeholder>
          </div>
          <div>
            <Placeholder as="img" id="BlankImg" animation="wave"/>            
          </div>          
    </section>
  )
}

export default ProjetoPlaceholder