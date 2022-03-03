import Home from './home/Home';
import Not from './notification/Not';
import Settings from './settings/Setts';
import User from './user/User';
import { Route, Routes } from 'react-router';
import Chat from './chat/chat';
import React from 'react';
  import SearchShow from './search/searchShow';
  import Saved from './user/Saved';
  import Created from './user/Created';
const NavBar = () =>(
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Not' element={<Not/>}></Route>
        <Route path='/Settings' element={<Settings/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/Chat' element={<Chat/>}></Route>
        <Route path='/SearchShow' element={<SearchShow/>}></Route>
        <Route path='/Saved' element={<Saved/>}></Route>
        <Route path='/Created' element={<Created/>}></Route>
      </Routes>
    )
    
    export default NavBar ;