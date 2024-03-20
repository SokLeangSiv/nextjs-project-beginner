'use client'

import { useState } from "react"


const ClientPage = () => {

  const [ count = 1 , setCount ] = useState(0);
  

  return (
    <div>
       <h1 className='text-6xl font-bold mb-8'>Counter : {count}</h1>
       <button className="btn btn-primary mr-3" onClick={() => setCount(count-1) }>Decrease</button>
       <button className="btn btn-primary" onClick={() => setCount(count+1) }>Increase</button>
    </div>
  )
}

export default ClientPage