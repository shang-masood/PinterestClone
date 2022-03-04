import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { AddEvent } from '../store/slice';
import './pin.css'
const AddBoard = ({ children, show, close }) => {
    const [boardNm,setBoardNm]=useState("")
    let [active,setactive]=useState(false)
  const dispatch =  useDispatch()
  
  const onAdd = (txt)=>{
    dispatch(AddEvent.add(txt))
  }
  const checkandset=(e)=>
  {
    setBoardNm(e.target.value);
    console.log(active)
    if(boardNm.length!=0)
   { setactive(true);}
    else
    {setactive(false);}
    
  }   
   return show ? (
        <div className="modal-overlay"
        
          onClick={() => {
            // close modal when outside of modal is clicked
            close();
          }}
        >
         <div className="modal"
            onClick={e => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
       >

           <div className='main-create-board'>
               <div className='header-create-board'>
             <h2>Create board</h2>
             </div>
             <div className='contents-create-board'>
                 <label > Name:</label><br></br>
             <input type='text' placeholder="Like 'Places to go' or 'Recipes to make'" name='name'  onChange={(e)=>{checkandset(e) }}/>
             </div>
             <div className='submit-create-board'>
             <button type='submit' className={`${active==true ? 'active': ''}`}onClick={()=>{onAdd(boardNm)}}>Create </button>
             </div>
           </div>
            <button className="modal-close"  onClick={close}></button>
            {children}
          </div>
          
        </div>
      ) : null;
    }

export default AddBoard