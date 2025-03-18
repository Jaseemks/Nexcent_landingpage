import React from 'react'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import { Ourclients } from '../components/Ourclients'
import { MangCommunity } from '../components/MangCommunity'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <Ourclients/>
        <MangCommunity/>
        <Footer/>
    </div>
  )
}
