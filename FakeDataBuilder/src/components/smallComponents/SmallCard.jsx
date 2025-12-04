import { User } from 'lucide-react'
import React from 'react'

function SmallCard() {
  return (
    <>
        <div className='w-[250px] h-[60px] bg-slate-400 text-white rounded-sm border border-white/30 shadow p-2'>
            <h1 className='font-bold tracking-widest text-md flex gap-1 items-center'> <User/> Users</h1>
            <p className='text-neutral-200'>1 items Sep 08, 03:14 PM</p>

        </div>
    </>
  )
}

export default SmallCard