'use client'
import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

const Newsletters = ({ post }) => {
  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  return (
    <div className={style.container}>
      <div className={style.btn}>
        <button onClick={() => setLanguage('swe')}>Swe</button>
        <button onClick={() => setLanguage('eng')}>Eng</button>
      </div>
      <div>
        {post.docs.map((item) => (
          <div key={item.title.sve}>
            <Link
              className={style.link}
              href={{
                pathname: 'nyheter/' + helpFunc(item.title.sve),
              }}
            >
              <div>{item.title.sve}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Newsletters
