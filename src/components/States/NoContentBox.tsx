import styled from 'styled-components'
import { BsFillCalendar2RangeFill } from 'react-icons/bs'

interface IProps {
  message?: string
}

export const NoContentBox = ({ message }: IProps) => {
  return (
    <StyledDiv>
      <BsFillCalendar2RangeFill size="2em" />
      {message && <p>{message}</p>}
    </StyledDiv>
  )
}

export const StyledDiv = styled.div`
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
