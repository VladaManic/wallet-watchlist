import {useEffect, useContext} from 'react';
import { getWalletsList } from './api/requests'
import WalletsContext from './context/WalletsContext'

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
  const walletsCtx = useContext(WalletsContext);

	useEffect(() => {
    getWalletsList().then((data) => {
        walletsCtx.setWallets(data);
        //console.log(data);
    });
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
