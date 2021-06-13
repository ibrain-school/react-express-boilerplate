import React from 'react'
import Head from './head'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-yellow-400  font-bold rounded-lg border shadow-lg p-10">
        My first REACT home component
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
