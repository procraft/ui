import React from 'react'
import Head from 'next/head'
import App from '../../../src/form/TextField'
import PhoneField from '../../../src/form/PhoneField'

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

      <div>
        <PhoneField
          disabled={false}
          value=""
        />
      </div>
    </>
  )
}

export default MainPage
