import React, { useState } from 'react';
import Header from './Header';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Helmet } from 'react-helmet';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Helmet>
        <title>Giselle Lupercio's PortFolio | {currentPage}</title>
      </Helmet>
      <Header>
       {/* We are passing the currentPage from state and the function to update it */}
        currentPage={currentPage} handlePageChange={handlePageChange}
      </Header>
      <main>{/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}</main>
        
      
    </>
  );
}
