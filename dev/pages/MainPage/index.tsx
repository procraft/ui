import React from 'react'
import Head from 'next/head'
import { TextField } from '../../../src/form/TextField'
import { PhoneField } from '../../../src/form/PhoneField'
import { Button } from '../../../src/Button'

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

      <div>
        <Button
          variant="raised"
        >
          Click me
        </Button>
      </div>
    </>
  )
}

export default MainPage
