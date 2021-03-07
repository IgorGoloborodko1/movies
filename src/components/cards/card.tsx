/* eslint-disable react/prop-types */
import React from 'react'

interface MovieCardProps {
  imgSrc: string
  name: string
  year: number
  description: string
}

export const MovieCard: React.FC<MovieCardProps> = ({
  imgSrc,
  name,
  year,
  description,
}) => {
  return (
    <div>
      <img src={imgSrc}></img>
      <div>
        <div>
          <span>{name}</span>
          <span>{description}</span>
        </div>
        <span>{year}</span>
      </div>
    </div>
  )
}
