import React , { useRef, useState } from 'react'
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
    </div>
  
      <button className="modal-close"  onClick={close}>  {/* HTML code for a multiplication sign */}</button>
      {children}
    </div>
    
  </div>
) : null;
}
export default Modal