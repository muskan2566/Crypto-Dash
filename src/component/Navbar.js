import React from 'react'

export default function navbar() {
    return (
        <>
          <div style={{width:"9%", borderRight:"3px solid #1d2244"}}>
            <div>
              <i className="fas fa-3x  fa-copyright"></i> 
                
                <h2>Crypto</h2>
                <h3><b>Dashboard</b></h3>
            </div>
            
              <ul className=" nav-list">
                 
                  <a href="https://www.linkedin.com/in/muskan-kushwah-a44143204/" trget="_blank" rel="noreferrer" className="li"><li><i className="fab effect-nav fa-2x fa-linkedin-in"></i></li></a>
                  <a href="https://github.com/muskan2566" target="_blank" rel="noreferrer" className="li"><li><i className="effect-nav fab fa-2x fa-github"></i></li></a>
              </ul>
          </div>

        </>
    )
}
