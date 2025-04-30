import axiosClient from '@/lib/axios'
// import { confessionData } from '@/lib/data'
import React from 'react'
import MoodChips from '../shared/Chip';
import ConfessionCard from './ConfessionCard';
import { mockGetApiCall } from '@/lib/mockAPI';
import { Confession } from '@/lib/data';
import Pagination from './Pagination';




export async function Confessions() {
    // const res = await axiosClient.get('/api/confess')
    // const data = await res.data

    const {data} = await mockGetApiCall()
    const confessions = data as Confession[]
    
    return (
        <div className='py-16'>
            <div className="confession-wrapper-container grid lg:grid-cols-3 gap-5">
                {confessions.map((confession) => (
                   <ConfessionCard key={confession.id}  {...confession}/>
                ))}
            </div>

                <Pagination pages={data} />

         
        </div>
    )
    
}


