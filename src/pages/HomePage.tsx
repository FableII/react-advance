import React from 'react'
import { useSearchUseresQuery } from '../store/github/github.api'

export function HomePage() {
    const {isLoading, isError, data} = useSearchUseresQuery('fable')

    console.log(data);
    return(
        <div className='flex justify-between pt-10 mx-auto h-screen w-screen'>
            {isError && <p className='text-center text-red-600'>Something went wrong...</p>}

            <div className='relative w-[560px]'>
                <input 
                type="text" 
                className='border py-2 px-4 w-full h-[42px] mb-2'
                placeholder='Search Github username...'/>

                <div className='absolute top-[42px] left-0 right-0 max-h-[240px] shadow-md bg-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, velit!
            </div>
            
            </div>

            
        </div>
    )
}