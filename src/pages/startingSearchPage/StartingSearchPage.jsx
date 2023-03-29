import React from 'react'
import img4 from "../../images/img4.jpg"

function StartingSearchPage() {
    const options = ['Fiction', 'NonFiction'];
    



  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-screen h-screen object-cover' src={img4} alt=""/>
        </div>

        <div className='bg-[#b0d9d3] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#fcc1bd] p-8 px-8'>
                <h2 className='text-4xl text-[#0B1354] font-bold text-center'>Welcome</h2>
                <div className='flex flex-col text-[#0B1354] py-2'>
                    <label htmlFor=''>Select Category</label>
                    <select className='rounded-lg bg-[#c19e9b] mt-2 p-2 focus:border-[#c19e9b] focus:bg-[#c19e9b] focus:outline-none'>
                    <option>Please choose one option</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
                </div>
                <div className='flex flex-col text-[#0B1354] py-2'>
                    <label htmlFor=''>Location</label>
                    <input className='p-2 rounded-lg bg-[#c19e9b] mt-2 focus:border-[#0B1354] focus:bg-[#c19e9b] focus:outline-none' type="text" />
                </div>
                <button className='w-full my-5 py-2 bg-[#0B1354] shadow-lg shadow-[#15182c] hover:shadow-[#15182c] text-[#fcc1bd] font-semibold rounded-lg'>Search</button> 
            </form>
        </div>
    </div>
  )
}

export default StartingSearchPage;
