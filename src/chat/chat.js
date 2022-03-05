import React, { useState } from 'react'
import './chat.css'
import { useSelector, useDispatch } from 'react-redux';
import { AddEvent } from '../store/slice';
const  Chat = ({ children, shown, close }) => {
  const [showmsg,setshowmsg]=useState(true)
  const [ messn,setmessn]=useState(false)
  const [ input,setinput]=useState("")
  const boards = useSelector(state => state.board.chat);
  console.log(boards)
  const showmsgs =()=>
  {
    setshowmsg(false);
    setmessn(true);
  }
  const closemess=()=>
  {
    setshowmsg(true);
    setmessn(false); 
  }
  const dispatch=useDispatch()
const onAdd = (title)=>{
  
    dispatch(AddEvent.addchat({title}))
    
  }
  return shown ? (
    <div className="chatdiv"
    
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
      >
        {showmsg && (<div>
        <div style={{textAlign:"center" }} >
      <h2>chats</h2>
      </div>
      <div style={{margin:"5px",display:"flex",flexDirection:"row",cursor:"pointer"}} onClick={(e)=>{showmsgs()}}  >
        <img style={{width:"50px",height:"50px",borderRadius:"30px"}}  src='data:image/jpeg;base64,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' className='modal-img' alt=''/>
        <h4 style={{position:"absolute",left:"73px",top:"60px"}} >sara masood</h4><br/>
        <p  style={{color:"rgb(107,107,107)",fontSize:"15px",position:"absolute",left:"73px",top:"75px"}}>you:yes  5h</p>
      </div>
      <div style={{textAlign:"center" }}> 
      <img style={{width:"50px",height:"50px",margin:"0 auto"}} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
      </div>
      </div>)}
      {
     messn&&(
       <div>
        <button className="modal-close"  onClick={closemess}>&#8592;</button>
        <div style={{textAlign:"center",margin:"5px"}}>
          <h3>sara Masood</h3>
          </div> 
          <div style={{textAlign:"right"}}>
          {
               boards.map((brd) => 
               {
                 return <div  style={{width:"100px",height:"auto",borderRadius:"50px",textAlign:"center",backgroundColor:"#efefef",borderBlockColor:"#efefef"}}>{brd.title}</div>
       })}
       </div>
          <div style={{position:"absolute",bottom:"10px",right:"0",left:"5px"}}>
            <form>
            <input placeholder='add your text here' onChange={(e)=>{setinput(e.target.value)}}  style={{border:"none",borderBottom:"1px rgb(107,107,107) solid",borderRadius:"10px",width:"75%",height:"100px"}} />
            <h3  style={{width:"80px" ,height:"40px",borderRadius:"10px",position:"absolute",bottom:"10px",right:"10px",backgroundColor:"red",color:"white",cursor:"pointer",textAlign:"center"}}onClick={(e)=>{onAdd(input)}} >send</h3>
            </form>
            </div>
         </div>


     )

      }
        <button className="modal-close"  onClick={close}> </button>
        {children}
      </div>
      
    </div>
  ) : null;
  }

export default Chat
