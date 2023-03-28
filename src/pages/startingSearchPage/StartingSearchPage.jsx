import React from 'react'
import picture1 from "./pexels.jpg"

function StartingSearchPage() {
    const options = ['Fiction', 'NonFiction'];
    



  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-screen h-screen object-cover' src={picture1} alt=""/>
        </div>

        <div className='bg-[#ebda6a] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#d1fbed] p-8 px-8'>
                <h2 className='text-4xl text-[#00372e] font-bold text-center'>WelCome</h2>
                <div className='flex flex-col text-[#00372e] py-2'>
                    <label htmlFor=''>Select Category</label>
                    <select className='rounded-lg bg-[#84aba4] mt-2 p-2 focus:border-[#00372e] focus:bg-[#84aba4] focus:outline-none'>
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
                </div>
                <div className='flex flex-col text-[#00372e] py-2'>
                    <label htmlFor=''>Location</label>
                    <input className='p-2 rounded-lg bg-[#84aba4] mt-2 focus:border-[#00372e] focus:bg-[#84aba4] focus:outline-none' type="text" />
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-[#ebda6a] font-semibold rounded-lg'>Search</button> 
            </form>
        </div>
    </div>
  )
}

export default StartingSearchPage;
