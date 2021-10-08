import React from 'react'
import styled from 'styled-components'
import Component from '..'

import { render } from '../../../../dev/tests/utils'

const border = '1px solid green'

const ComponentStyled = styled(Component)`
  color: ${({ theme }) => theme.ui.color.primary};

  border: ${border};
`

describe('Component', () => {
  it('Render default', () => {
    const tree = render(<Component className={undefined} focused={false} disabled={false} />)
    expect(tree.container).toMatchSnapshot()
  })

  it('Render styled', () => {
    const tree = render(<ComponentStyled className={undefined} focused={false} disabled={false} />)
    const node = tree.container.children[0]
    expect(tree.container).toMatchSnapshot()
    expect(node).toMatchSnapshot()
    expect(node).toHaveStyleRule('border', border)
  })
})
