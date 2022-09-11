import React from 'react'
import Fact from '../Fact/Fact'

export default function Main() {
  const facts = ['Was first released in 2013', 'Was originally created by Jordan Walke',
    'Has well over 100K start on GitHub', 'Is maintaned by Facebook',
    'Powers thousands of enterprise apps, including mobile apps'
  ]


  return (

    <main className='content'>
      <h1 className='main-title'>Fun facts about React</h1>
      <ul>
        {
          facts.map((fact) =>

            <Fact text={fact}></Fact>

          )
        }
      </ul>
    </main>
  )
}
