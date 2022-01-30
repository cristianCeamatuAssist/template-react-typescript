import styled, { css } from 'styled-components'

interface IStylesProps {
  subtitleSize?: string
}

interface IProps extends IStylesProps {
  title?: string
  subtitle?: string
  className?: string
}

export const ErrorMessage = ({ title, subtitle, className, subtitleSize }: IProps) => {
  return (
    <Div className={className} subtitleSize={subtitleSize}>
      {title && <h3>{title}</h3>}
      {subtitle && <p>{subtitle}</p>}
    </Div>
  )
}

const Div = styled.div<IStylesProps>`
  color: ${({ theme }) => theme.colors.error};

  &::first-letter {
    text-transform: capitalize;
  }

  ${({ subtitleSize }) =>
    subtitleSize &&
    css`
      font-size: ${subtitleSize};
    `}
`
