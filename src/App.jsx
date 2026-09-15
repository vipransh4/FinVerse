import { useState } from 'react'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Company from './components/Company'
import AllCards from './components/AllCards'
import Search from './components/Search'
import './App.css'

function App() {
  const [route, setRoute] = useState('hero');
  const [category, setCategory] = useState(null);
  const [company, setCompany] = useState(null);

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
        />
      ) : route === 'search' ? (
        <Search 
          setRoute={setRoute}  
        />
      ) : null}
    </>
  );
}

export default App;