import styled from 'styled-components'

interface IProps {
  height?: string
  margin?: string
}

export const Divider = (props: IProps) => {
  return <StyledDiv {...props} />
}

const StyledDiv = styled.div<IProps>`
  background-color: #f0f1f3;
  height: ${({ height }) => height || '1px'};
  margin: ${({ margin }) => margin || '10px 0'};
`
