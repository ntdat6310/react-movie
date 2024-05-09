interface Props {
  icon?: React.ReactNode
  className?: string
  title?: string
  titleClassName?: string
}

export default function Button({
  title,
  icon,
  titleClassName = 'text-sm sm:text-base',
  className = 'flex items-center'
}: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <button className={titleClassName}>{title}</button>
      {icon}
    </div>
  )
}
