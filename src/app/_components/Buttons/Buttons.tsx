import Link from 'next/link'
import React from 'react'
interface Props {
  text: string
  color: string
  textBlack?: boolean
  onClick?: () => void
  hoverColor?: string
  className?: string
  to?: string
}

export const PrimaryButton = ({ text, color = 'white', textBlack = true, onClick, hoverColor, className, to }: Props) => {
  if (!to)
    return (
      <button
        onClick={onClick}
        className={`${color} ${textBlack ? 'text-black' : 'text-white'} font-bold py-2 w-[130px] rounded-lg ${hoverColor} ${className}`}
      >
        {text}
      </button>
    )
  return (
    <Link href={to}>
      <button
        onClick={onClick}
        className={`${color} ${textBlack ? 'text-black' : 'text-white'} font-bold py-2 w-[130px] rounded-lg ${hoverColor} ${className}`}
      >
        {text}
      </button>
    </Link>
  )
}
