import React from 'react'
import MatchesCard from '../components/MatchesCard'

const Matches = () => {
  return (
    <>
        <div className='flex flex-row justify-evenly py-20'>
            <div className='flex flex-col items-center space-y-10'>
                <h1 className='text-7xl'>Upcoming</h1>
                <MatchesCard />
            </div>


            <div className='flex flex-col items-center space-y-10'>
                <h1 className='text-7xl'>Completed</h1>
                <MatchesCard />
            </div>
        </div>
    </>
  )
}

export default Matches