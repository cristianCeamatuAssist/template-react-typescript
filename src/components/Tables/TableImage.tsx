import styled from 'styled-components'

interface IProps {
  src: string
  alt: string
}

export const TableImage = ({ src, alt }: IProps) => {
  return <Img src={src} alt={alt} />
}

export const Img = styled.img`
  max-width: 6rem;
  max-height: 6rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`
