import React, { useState } from 'react'
import './modal.css';
import AddBoard from '../pin/addBoard';
import { Link } from 'react-router-dom';
function OpenAdd  ({ close, show, children })  {
    const [showpin,setpin]=useState(false);

    return show ? (
      <div>
           {showpin &&(
      <AddBoard show={showpin} 
      close={() => {
        setpin(false);}}/>
      )}
        <div className="Amodal"
        
          onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
        >
         <div className="Amodal-main"
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            <span>create</span>
           <Link to='AddPin'> <h4 > pin</h4></Link>
            <h4 onClick={(e) => {setpin(true);}}> board</h4>
        
            <button className="modal-close"  onClick={close}> </button>
            {children}
          </div>
          
        </div>
        </div> ) : null;
    }

export default OpenAdd