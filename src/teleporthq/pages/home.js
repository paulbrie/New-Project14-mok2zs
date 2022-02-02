import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project14</title>
        <meta property="og:title" content="New Project14" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello! :)</h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1643671228810-edd238b6da07?ixid=Mnw5MTMyMXwwfDF8YWxsfDN8fHx8fHwyfHwxNjQzODEyNDMy&amp;ixlib=rb-1.2.1&amp;w=200"
        alt="image"
        className={styles['image']}
      />
      <AppComponent></AppComponent>
    </div>
  )
}

export default Home
