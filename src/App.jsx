import { useState } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';

import Hero from './components/Hero';
import Category from './components/Category';
import Company from './components/Company';
import CompanyCards from './components/CompanyCards';
import Search from './components/Search';
import SelectedCard from './components/SelectedCard/SelectedCard';

import './App.css';

function AppContent() {
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [company, setCompany] = useState(null);

  // Navigation helper for your existing components
  const setRoute = (route) => {
    const paths = {
      hero: '/',
      company: '/company',
      allcards: '/cards',
      search: '/search'
    };

    if (route === 'details') {
      return;
    }

    navigate(paths[route] || '/');
  };

  const setSelectedCardName = (name) => {
    navigate(`/card/${encodeURIComponent(name)}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero setRoute={setRoute} />
            <Category
              setRoute={setRoute}
              setCategory={setCategory}
            />
          </>
        }
      />

      <Route
        path="/company"
        element={
          <Company
            setRoute={setRoute}
            category={category}
            setCategory={setCategory}
            setCompany={setCompany}
          />
        }
      />

      <Route
        path="/cards"
        element={
          <CompanyCards
            setRoute={setRoute}
            category={category}
            company={company}
            setCardName={setSelectedCardName}
          />
        }
      />

      <Route
        path="/search"
        element={
          <Search
            setRoute={setRoute}
            setCardName={setSelectedCardName}
          />
        }
      />

      <Route
        path="/card/:cardName"
        element={<CardDetails setRoute={setRoute} />}
      />

      <Route
        path="*"
        element={<h2>404 - Page Not Found</h2>}
      />
    </Routes>
  );
}

function CardDetails({ setRoute }) {
  const { cardName } = useParams();

  return (
    <SelectedCard
      cardName={decodeURIComponent(cardName)}
      setRoute={setRoute}
    />
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
