import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { AddEvent } from '../store/slice';
import './mod.css'
const Oimg = ({ children, shown, close,data }) => {
    const dispatch =  useDispatch()
    const [s,sets]=useState("save")
    const onAdd = (title,txt)=>{
      let desc=""
      let t=""
        dispatch(AddEvent.addsaved({title,txt,desc,t}))
        sets("saved")
      }
    return shown ? (
        <div className="Pmodal-overlay"
        
          onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
        >
         <div className="Pmodal"
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
              <div className='imgs'>
        <img src={data} alt=''  />
           </div>
           <div className='savecmt'>
               <h3>all pins </h3>
              <button onClick={()=>{onAdd("saved",data)}}>{s}</button>
              </div>
             
                  <h2 className='comment'>comment</h2>
                  <input placeholder='add your comment here'  className="ip"/>

            
        
            <button className="modal-close"  onClick={close}></button>
            {children}
          </div>
          
        </div>
      ) : null;
        }

export default Oimg