'use client'
import React from 'react'
import style from './style.module.scss'

const Newsletter = ({ data }) => {
  const item = data.docs[0].tabTwo.news

  console.log('myyyy', item)

  return (
    <div className={style.container}>
      <div>
        <div>Titel</div>
        <div> {item?.title}</div>
      </div>

      <div>
        <div>Nyhet</div>
        <div></div>
      </div>
    </div>
  )
}

export default Newsletter