import styled from 'styled-components'

interface IProps {
  title?: string
  subtitle?: string
  icon: JSX.Element
}

export const ErrorBox = ({ title, subtitle, icon }: IProps) => {
  return (
    <Div>
      {icon}

      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
    </Div>
  )
}

const Div = styled.div`
  position: absolute !important;
  inset: 0 0 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h3 {
    color: ${({ theme }) => theme.colors.error};
  }
`
