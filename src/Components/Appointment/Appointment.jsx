import React from 'react'
import "./Appointment.css";
import Datepicker from 'flowbite-datepicker/Datepicker';
import DateRangePicker from 'flowbite-datepicker/DateRangePicker';
const Appointment = () => {
  return (
    <div class="bg-cover bg-center h-screen" className='bg-image'>
        <div className="w-full mt-10 lg:w-auto lg:inline-block lg:align-top bg-white border border-gray-200 p-4">
        <div className='pt-6 pb-6'><h1 className="font-bold text-4xl">Book Appointment</h1> </div> 
<div>                     
<form class="max-w-sm mx-auto" className="p-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
    <div>
  <select id="department" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Department</option>
    <option value="SR">Surgery and Radiology</option>
    <option value="C">Cardology</option>
    <option value="CS">Child Specialists</option>
    <option value="E">Emergency</option>
  </select>
  </div>
  <div>
  <select id="doctor" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Doctor</option>
    <option value="1">Dr.Serena Mitchell</option>
    <option value="2">Dr.Julian Bennett</option>
    <option value="3">Name 3</option>
    </select>
    </div>
    <div>
        <input type="text" id="full_name" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Full Name" required />
        </div>
    <div class="relative">
    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
            </svg>
        </div>
        <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Your Phone Number" required />
    </div>
    <div class="relative max-w-sm">
  <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>
  </div>
  <input datepicker type="text" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
    <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
        </div>
        <input type="time" id="time" class="bg-white border leading-none border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" placeholder='Select Time' required />
    </div>

    <div class="relative" >
    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
        </div>
    
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Special Request"></textarea>
    </div>
<div class="relative">
    <button className="absolute py-2 mt-4 inset-0 w-full bg-backgroundColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">Submit</button>
    </div> 
</form>     
</div>         
</div>
</div>

  )
}

export default Appointment
