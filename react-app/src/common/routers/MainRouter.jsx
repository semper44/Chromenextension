/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Nfts from '../pages/Nfts';
import Singlenft from '../pages/SingleNft';
import ListingNft from '../pages/ListingNft';
import TransferNft from '../pages/TransferNft';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nfts' element={<Nfts/>} />
        <Route path="/singlenft" element={<Singlenft />} />
        <Route path='/listings' element={<ListingNft />} />
        <Route path='/transfer' element={<TransferNft />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MainRouter