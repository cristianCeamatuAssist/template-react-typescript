import styled from 'styled-components'
import { theme } from 'assets'

interface IProps {
  text: string
  bgThemeColor: keyof typeof theme.colors
}

export const Label = ({ text, bgThemeColor }: IProps) => {
  return <StyledSpan bgThemeColor={bgThemeColor}>{text}</StyledSpan>
}

const StyledSpan = styled.span<{ bgThemeColor: keyof typeof theme.colors }>`
  color: ${({ theme }) => theme.colors.grey.lightest};
  background: ${({ theme, bgThemeColor }) => theme.colors[bgThemeColor] || theme.colors.ternary};
  padding: 0.375em 0.5em;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
`
