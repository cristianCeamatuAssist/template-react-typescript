import styled from 'styled-components'

interface IComponentProps {
  clickHandler: () => void
  initials: string
}

export const AvatarInitials = ({ clickHandler, initials }: IComponentProps) => {
  return <Wrapper onClick={() => clickHandler()}>{initials || 'N/A'}</Wrapper>
}

const Wrapper = styled.div`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.grey.lightest};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.p};
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.shadows.normal};

  &:hover {
    cursor: pointer;
  }
`
