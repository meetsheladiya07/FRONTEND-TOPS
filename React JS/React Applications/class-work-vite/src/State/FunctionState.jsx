// Hooks : it's magical and reuse , reduce code
// useState
// import useState 
// return first and function name inside
// type [defind,setdefind] = useState()

import React, { useState } from 'react'
import ImageData from './ImageData'

function FunctionState() {

    const [name, setname] = useState("Meet Sheladiya")
    const [count, setcount] = useState(1)
    const [isImage, setisImage] = useState(true)


    const incrment2 = () => {
        setcount(count + 2)
    }

    return (
        <div>
            <h1>Name : {name}</h1>
            <button onClick={() => setname("Monil")}>Change name</button>
            <button onClick={() => setname("Ridham")}>Change name 1</button>

            <h1>Count : {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={incrment2}>Increment by 2</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}>Reset</button>
            <hr />
            <br />

            <button onClick={() => setisImage(false)}>Hide</button>
            <button onClick={() => setisImage(true)}>Show</button>
            <button onClick={() => setisImage(!isImage)}>Toggle</button>

            {
                isImage ? <ImageData /> : false
            }
        </div>
    )
}

export default FunctionState