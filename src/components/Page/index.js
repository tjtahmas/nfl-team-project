import React from 'react';
import PageContent from '../PageContent';
import Search from '../Search';
import Home from '../Home';
import Login from '../Login';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'search':
        return <Search />;
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;;
      default:
        return <Login />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
