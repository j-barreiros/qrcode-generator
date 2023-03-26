import { useState } from 'react'
import './App.css'
import CreateQR from './components/create-qr/create-qr.component';
import DisplayQR from './components/display-qr/display-qr.component';
import QRApp from './components/qr-app/qr-app..component';
import QRList from './components/qr-list/qr-list.component';
import AppContextProvider from './context/appcontext/appcontext.context';
import QRDataContextProvider from './context/qrdata/qrdata.context';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <QRDataContextProvider>
      <AppContextProvider>
        <GlobalStyle/>
          <section className="App">
            <QRApp />
          </section>
      </AppContextProvider>
    </QRDataContextProvider>
  )
}

export default App
