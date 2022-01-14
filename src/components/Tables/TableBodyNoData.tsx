import styled from 'styled-components'

interface IProps {
  title: string
  columnsCount: number
  subtitle?: string
  noDataRowsCount?: number
  iconComponent?: JSX.Element
}

export const TableBodyNoData = ({ iconComponent, title, subtitle, columnsCount, noDataRowsCount }: IProps) => {
  return (
    <>
      {[...Array(noDataRowsCount || 10)].map((item, index) => (
        <tr key={index}>
          {[...Array(columnsCount)].map((cell, ind) => (
            <td key={ind}></td>
          ))}
        </tr>
      ))}
      <tr>
        <td>
          {iconComponent}
          <h3>{title}</h3>
          {subtitle && <StyledSubtext>{subtitle}</StyledSubtext>}
        </td>
      </tr>
    </>
  )
}

const StyledSubtext = styled.p`
  /* max-width: 300px; */
  white-space: normal;
  text-align: center;
`
