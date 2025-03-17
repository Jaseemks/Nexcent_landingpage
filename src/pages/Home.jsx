import React from 'react'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import { Ourclients } from '../components/Ourclients'
import { MangCommunity } from '../components/MangCommunity'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Body/>
        <Ourclients/>
        <MangCommunity/>
    </div>
  )
}
