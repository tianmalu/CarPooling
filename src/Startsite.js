import React from 'react'

const Startsite = () => {

    const handleLogin = () =>{

    }

    const handleRegister = () =>{
        
    }
  return (
    <section >
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Ridelink!</h1>
        <p>Start Your Eco Journey at Ridelink!</p>
        <button className="bg-white hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleLogin}>Login</button>
        <button className="bg-white hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleRegister}>Register</button>
    </section>

  )
}

export default Startsite;