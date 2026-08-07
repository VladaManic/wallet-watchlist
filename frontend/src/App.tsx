import {useEffect} from 'react';
import { getWalletsList } from './api/requests'

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
	useEffect(() => {
    getWalletsList();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
