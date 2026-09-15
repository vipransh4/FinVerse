import { useState } from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Company from './components/Company'
import AllCards from './components/AllCards'
import Search from './components/Search'
import Details from './components/Details' 
import './App.css'

function App() {
  const [route, setRoute] = useState('hero');
  const [category, setCategory] = useState(null);
  const [company, setCompany] = useState(null);
  const [cardName, setCardName] = useState(null);

  return (
    <>
      {route === 'hero' ? (
        <>
          <Hero setRoute={setRoute} />
          <Cards setRoute={setRoute} setCategory={setCategory} />
        </>
      ) : route === 'company' ? (
        <Company 
          setRoute={setRoute} 
          category={category} 
          setCategory={setCategory} 
          setCompany={setCompany} 
        />
      ) : route === 'allcards' ? (
        <AllCards 
          setRoute={setRoute} 
          category={category} 
          company={company}
          setCardName={setCardName} 
        />
      ) : route === 'search' ? (
        <Search 
          setRoute={setRoute} setCardName={setCardName}  
        />
      ) : route === 'details' ? (
        <Details cardName={cardName} setRoute={setRoute}/>
      ) : null}
    </>
  );
}

export default App;