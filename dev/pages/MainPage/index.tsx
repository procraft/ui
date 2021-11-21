import React from 'react'
import Head from 'next/head'
import { TextField } from '../../../src/form/TextField'
import { PhoneField } from '../../../src/form/PhoneField'
import { Button } from '../../../src/Button'
import { TextArea } from '../../../src/form/TextArea'

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

      <div>
        <TextField
          className={undefined}
          title="Test field"
          helperText="Some gelper text"
          {...props}
        />
      </div>

      <div>
        <TextField
          className={undefined}
          title="Test field 2"
          helperText="Some gelper text"
          {...props}
        />
      </div>

      <div>
        <TextField
          className={undefined}
          title="Test field 3"
          helperText="Some gelper text"
          value="Some value"
          {...props}
        />
      </div>

      <div>
        <PhoneField disabled={false} value="" />
      </div>

      <div>
        <PhoneField disabled={false} value="+7-987-777-47-47" />
      </div>

      <div>
        <TextArea title="" />
      </div>

      <div>
        <TextArea title="Title" helperText="helperText" />
      </div>

      <div>
        <Button variant="raised">Click me</Button>
      </div>
    </>
  )
}

export default MainPage
