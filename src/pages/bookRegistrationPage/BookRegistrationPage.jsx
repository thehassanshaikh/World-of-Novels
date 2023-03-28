import React from 'react'
import backgroundImage from './mintGreenBooks.jpg'

function BookRegistrationPage() {
  const options = ['Fiction', 'NonFiction'];
  const optionsCondition = ['Best/New', 'Average', 'Good', 'Bad (Some Pages missing)']

  return (
    <>
    <div className="min-h-screen py-40 bg-gradient-to-r from-[#9ccddf] via-[#6a9bad] to-[#51899e]" >
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-[#d1fbed] rounded-2xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{
            backgroundImage:
              `url(${backgroundImage})`,
          }}>
            <h1 className="text-[#ffc000] text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-[#ffc000] text-xl">"Remember: A best-selling book usually follows a simple rule, It's a wonderful story, wonderfully told; not, It's a wonderfully told story."<span className='text-[#00372e] font-semibold'>~ Nicholas Sparks</span></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 text-[#00372e]">Register Your Book</h2>
            <p className="mb-4 text-[#00372e]">
              Register your Novel. It’s free and only take a minute
            </p>
            <form action="#">
              
              <div className="mt-5">
                <input type="text" placeholder="Title" className="border border-[#00372e] py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Author Name" className="border border-[#00372e] py-1 px-2 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <input type="text" placeholder="MRP in Rs" className="border border-[#00372e] py-1 px-2" />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
              <select className="block w-full py-2 mb-4 text-sm text-[#00372e] border border-[#00372e]">
              <option>Select Book Category</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
              </select>
              <select className="block w-full py-2 mb-4 text-sm text-[#00372e] border border-[#00372e]">
                <option>Select Book Condition</option>
                {
                  optionsCondition.map((option,index) => {
                    return <option key={index}>
                      {option}
                    </option>
                  })
                }
              </select>
              </div>
              <div className='mt-5'> 
              <label className="block mb-2 text-sm font-medium text-[#00372e] dark:text-white" htmlFor="file_input">Upload Picture</label>
              <input className="block w-full text-sm text-[#00372e] border border-[#00372e] cursor-pointer bg-gray-50 focus:outline-none py-1 px-2" id="file_input" type="file" />
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border border-[#00372e]" />
                <span className='text-[#00372e]'>
                  I accept the <a href="#" className="text-[#ffc000] font-semibold">Terms of Use</a> &  <a href="#" className="text-[#ffc000] font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-[#00372e] py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BookRegistrationPage
