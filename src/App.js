import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {

  const [pages] = useState([
    { name: "home" },
    { name: "teams" },
    { name: "login" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <ApolloProvider client={client}>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
