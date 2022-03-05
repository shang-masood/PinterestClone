import React from 'react'
import './not.css'
function Modal({ children, shown, close }) {
  
return shown ? (
  <div className="notification"
  
    onClick={() => {
      // close modal when outside of modal is clicked
      close();
    }}
  >
   <div className="notmodal"
      onClick={e => {
        // do not close modal if anything inside modal content is clicked
        e.stopPropagation();
      }}
    > <div>
    <h3>updates</h3>
    <div style={{textAlign:"center" }}> 
    <img style={{width:"50px",height:"50px",margin:"0 auto"}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
    </div>
    </div>
      <button className="modal-close"  onClick={close}> </button>
      {children}
    </div>
    
  </div>
) : null;
}
export default Modal