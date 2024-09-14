/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Main from './Component/Main'
import { Provider } from "react-redux";
import appStore from './utils/appstore';



function App() {
  return (
    <>
    <Provider store={appStore}>
    <Header/>
    <Navbar/>
    <Main/>
    
    </Provider>

    
    </>

  )
}

export default App
