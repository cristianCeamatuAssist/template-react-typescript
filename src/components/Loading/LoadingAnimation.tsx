import { Spinner } from 'react-bootstrap'

interface IProps {
  animation?: 'grow' | 'border'
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'sm'
  className?: string
}

export const LoadingAnimation = ({ animation, size, className, variant }: IProps) => {
  return <Spinner animation={animation || 'grow'} variant={variant || 'primary'} size={size} className={className} />
}
