import React from 'react'
import Header from 'src/components/Header'
interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
