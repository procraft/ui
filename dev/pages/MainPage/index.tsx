import React from 'react'
import Head from 'next/head'
import { TextField } from '../../../src/form/TextField'
import { PhoneField } from '../../../src/form/PhoneField'

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
      <TextField className={undefined}
        title="Test field"
        helperText="Some gelper text"
        {...props} />

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
