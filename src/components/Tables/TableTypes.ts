// import { preProcessingStatusColorMapping } from 'features/claims'
export interface IColumn {
  name: string
  label: string
  hideSortBy?: boolean
  extraProps?: { [key: string]: string }
  format?: (value: string | number | boolean) => string
}

export interface IRow {
  id: string
  // status: keyof typeof preProcessingStatusColorMapping
  [key: string]: string | number | boolean
}

export interface ISort {
  current?: string
  sortByHandler: (value: string) => void
}

export interface IPagination {
  itemsPerPage: number
  totalItems: number
  page: number
  changeItemsPerPageHandler: (itemsPerPage: number | string) => void
  changePageHandler: (page: string | number) => void
}

export interface INoDataState {
  title: string
  subtitle?: string
  iconComponent?: JSX.Element
}

export interface ISelectableRows {
  setSelectedRows: (selectedRows: { [key: string]: boolean }) => void
  selectedRows: { [key: string]: boolean }
}
