import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import NavBar from './Routepages';
import search from './search/search';
import Home  from './home/Home';
import SearchShow from './search/searchShow';
function App() {

  const [showModal, setShowModal] = useState(false);
  const [pins,setPins]=useState([]);
  
  const getimages=(term)=>
  {
  return search.get("https://api.unsplash.com/search/photos", {
  params:
  {
    query:term
  }
  })
  

  }

  const onSearchS = (term) =>
  {
   
getimages(term).then((res) =>
{
let result=res.data.results;
let newPins = [
...result,
... pins
]
newPins.sort(function(a,b)
{
return 0.5-Math.random();
})

setPins(newPins)
setShowModal(true);
});

  }

 

  
  return (
    <div className="App">
     <Header onSubmit={onSearchS}   />
     {showModal && (
        <SearchShow pins={pins}/>
        
        ) 
        }
     <NavBar  />
     
    </div>
  );
}

export default App;
