import React from 'react'
import './modal.css';
function OpenAdd  ({ close, show, children })  {
    const showHideClassName = show ? "Amodal display-block" : "Amodal display-none";

    return show ? (
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
            <h4> pin</h4>
            <h4> board</h4>
        
            <button className="modal-close"  onClick={close}> </button>
            {children}
          </div>
          
        </div>
      ) : null;
    }

export default OpenAdd