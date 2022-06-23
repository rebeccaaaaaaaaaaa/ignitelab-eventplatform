import React from 'react'
import { Footer } from '../components/Footer'
import {Header} from '../components/Header'
import {Sidebar} from '../components/Sidebar'
import {Video} from '../components/Video'

function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default Event