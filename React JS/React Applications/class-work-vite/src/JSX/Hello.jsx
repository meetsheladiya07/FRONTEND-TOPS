// jsx : javascript syntax extensible / xml 
// js vs jsx: 0.1s 
// jsx :easy read and write also html
// jsx : {}
// react : className

import React from 'react'

function Hello() {

    let test = "Meet Sheladiya"
    console.log(test)

    let person = {
        name:"Meet",
        age:22,
        course:"Full Stack Development"
    }

    console.log(person)

    let htmldata = <ul>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
    </ul>

  return (
    <div>
      <h1>Hello JSX file</h1>

      <h1 className=''>Name : {test}</h1>

      <h1>Name : {person.name}</h1>
      <h1>Age : {person.age}</h1>
      <h1>Course : {person.course}</h1>

      {htmldata}

      <h1>Hello Sum : {10+10+2004}</h1>
    </div>
  )
}

export default Hello