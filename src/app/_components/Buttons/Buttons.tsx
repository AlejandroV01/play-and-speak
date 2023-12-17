import React from 'react'

interface Props {
  text: string
  color: string
  textBlack?: boolean
  onClick?: () => void
}

export const PrimaryButton = ({ text, color = 'white', textBlack = true, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`${color} ${textBlack ? 'text-black' : 'text-white'} font-bold py-2 w-[130px] rounded-lg hover:bg-blue-600`}>
      {text}
    </button>
  )
}
