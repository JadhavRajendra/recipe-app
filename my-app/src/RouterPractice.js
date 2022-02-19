import React from 'react'
import{
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import Home from './Component/Home'

export default function RouterPractice() {
  return (
    <div>
      <Routes>
      <Link to="/about">
         <li>home</li>
         </Link>
        <Route path="/" exact element={Home} />
      </Routes>
    </div>
  )
}



