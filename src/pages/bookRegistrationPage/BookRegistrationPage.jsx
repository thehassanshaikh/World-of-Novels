import React from 'react'
import backgroundImage from './backgroundImage-2.jpg'

function BookRegistrationPage() {
  return (
    <>
    <div className="min-h-screen py-40 bg-gradient-to-r from-stone-700 via-gray-800 to-zinc-400" >
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{
            backgroundImage:
              `url(${backgroundImage})`,
          }}>
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">"Remember: A best-selling book usually follows a simple rule, It's a wonderful story, wonderfully told; not, It's a wonderfully told story."<span className='text-[#1e3042] font-bold'>~ Nicholas Sparks</span></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 text-[#34495E]">Register Your Book</h2>
            <p className="mb-4 text-[#34495E]">
              Register your Novel. It’s free and only take a minute
            </p>
            <form action="#">
              
              <div className="mt-5">
                <input type="text" placeholder="Title" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Author Name" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <input type="text" placeholder="MRP in Rs" className="border border-gray-400 py-1 px-2" />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
              <select className="block w-full py-2 mb-4 text-sm text-gray-600 border border-gray-400">
              <option selected>Book Category</option>
              <option value="Fiction">Fiction</option>
              <option value="NonFiction">NonFiction</option>
              </select>
              <select className="block w-full py-2 mb-4 text-sm text-gray-600 border border-gray-400">
              <option selected>Book Condition</option>
              <option value="Best">Best/New</option>
              <option value="Average">Average</option>
              <option value="Good">Good</option>
              <option value="Bad">Bad(Some Pages missing)</option>
              </select>
              </div>
              <div className='mt-5'> 
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Upload Picture</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-2" id="file_input" type="file" />
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-[#34495E] font-semibold">Terms of Use</a> &  <a href="#" className="text-[#34495E] font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div className="mt-5">
                <button className="w-full bg-[#34495E] py-3 text-center text-white">Register Now</button>
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
