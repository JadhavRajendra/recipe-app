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
        <Route path="/" exact element={Home} />
      </Routes>
    </div>
  )
}



