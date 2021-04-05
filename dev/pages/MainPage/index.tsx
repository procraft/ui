import React from 'react'
import Head from 'next/head'
import App from '../../../src/components/form/TextField'

const MainPage: React.FC = (props) => {
  return (
    <>
      <Head>
        <title>Component boilerplate</title>
        <meta
          name="description"
          content="Component boilerplate for prisma-cms"
        />
      </Head>
      <App className={undefined} {...props} />
    </>
  )
}

export default MainPage
