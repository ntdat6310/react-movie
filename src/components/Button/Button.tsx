import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  className?: string
  title?: string
  titleClassName?: string
}

export default function Button({ title, icon, titleClassName, className, ...rest }: Props) {
  return (
    <button className={className} {...rest}>
      <div className={titleClassName}>{title}</div>
      {icon}
    </button>
  )
}
