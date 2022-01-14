import styled from 'styled-components'
// components
import { Layout } from 'components'
// features
import { BreedsTable } from 'features/dogs'

export const Dogs = () => {
  return (
    <Layout>
      <Div>
        <h3>Who wants to see some nice dogs?</h3>

        <BreedsTable />
      </Div>
    </Layout>
  )
}

export const Div = styled.div`
  h3 {
    text-align: center;
  }
`
