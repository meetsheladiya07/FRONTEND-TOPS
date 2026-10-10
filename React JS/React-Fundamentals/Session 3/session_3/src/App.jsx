import { useState } from 'react'
import ProductCard from './ProductCard.jsx'
import UserProfile from './UserProfile.jsx'
import img from './assets/img.png'


function App() {

  return (
    <>
      <div style={{ padding: '20px' }}>
        <ProductCard productName="Wireless Headphones" price={2999} imageUrl="https://cdn.pixabay.com/photo/2019/04/27/06/22/beats-4159345_1280.jpg" />
      </div>
      <div style={{ padding: '30px', backgroundColor: '#fafafa', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h2>Instagram Profile Cards Example</h2>

      <UserProfile 
        username="its_meet07_" 
        followers={450} 
        profilePic={img} 
      />

      {/* <UserProfile username="new_user_without_props" /> */}
    </div>
    </>
  )
}

export default App
//