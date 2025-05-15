'use client'
import React, { useState } from 'react'
import style from './style.module.scss'
import Image from 'next/image'

const Newsletter = ({ data }) => {
  const [isLanguage, setLanguage] = useState('swe')
  const item = data.docs[0]

  const helpFunc = (str) => {
    str = str.replace('\n', '<br />')
    return str
  }

  console.log('News data', item)

  console.log('news test', helpFunc(item?.tabTwo.news.sve))

  return (
    <div className={style.container}>
      <div className={style.btn}>
        <button onClick={() => setLanguage('swe')}>Swe</button>
        <button onClick={() => setLanguage('eng')}>Eng</button>
      </div>
      <div>
        <div className={style.title}>
          {isLanguage === 'swe' ? item?.title.sve : item?.title.eng}
        </div>
        <div className={style.img}>
          <Image
            src={item?.images[0].sizes.medium.url}
            fill={true}
            layout="fill"
            objectFit="cover"
            alt="billiga försäkringar"
            className={style.test}
          />
        </div>

        {/*
        <Image
          className={style.img}
          src={item?.images[0].sizes.medium.url}
          height={1600}
          width={900}
          alt="skinnjacka"
        />
        */}

        <div style={{ whiteSpace: 'pre-line' }}>
          {isLanguage === 'swe' ? item?.tabTwo.news.sve : item?.tabTwo.news.eng}
        </div>
      </div>
    </div>
  )
}

export default Newsletter
