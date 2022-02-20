import React from 'react';
import './App.css';
import Header from './header/Header';
import NavBar from './Routepages';
import search from './search/search'


function App() {
const getimages=(term)=>
{
return search.get("https://api.unsplash.com/search/photos", {
params:
{
  query:term
}
})


}



  const onsearch=(term)=>
  {
    console.log("on search",term)
getimages(term)
  }
  onsearch("bali");
  return (
    <div className="App">
     <Header  onSubmit={onsearch}        />
     <NavBar />
    </div>
  );
}

export default App;
