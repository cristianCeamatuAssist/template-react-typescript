import styled from 'styled-components'
// components
import { LoadingAnimation } from 'components'

interface IProps {
  animation?: 'grow' | 'border'
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'sm'
  className?: string
  message?: string
}

export const LoadingBox = ({ message, ...props }: IProps) => {
  return (
    <StyledDiv>
      <LoadingAnimation {...props} />

      {message && <p>{message}</p>}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  position: relative;
  top: -2em;

  > p {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ theme }) => theme.colors.black};
  }
`
