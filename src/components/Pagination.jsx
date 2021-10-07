import React from 'react'

const Pagination = () => {
    return (
        <div class="flex justify-around my-12 w-full">
            <div class="flex text-black w-4/12">
                <div class="w-14 h-12 mr-1 flex justify-center items-center rounded-full bg-blue-light text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                <div class="flex justify-evenly h-12 font-medium w-full">
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">1</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md bg-blue-dark text-white ">2</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">3</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">...</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">13</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">14</div>
                    <div class="w-12 sm:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-md  bg-blue-light">15</div>
                    <div class="w-12 h-12 sm:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-md bg-blue-dark text-white">2</div>
                </div>
                <div class="h-12 w-14 ml-1 flex justify-center items-center rounded-full bg-blue-light text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Pagination
