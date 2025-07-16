"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AddNewSessionDialoge from './AddNewSessionDialoge';
import axios from 'axios';
import HistoryTable from './HistoryTable';

function HistoryList() {
    const [historyList, setHistoryList] = useState([]);

    // ⏳ Load session history when the component mounts
    useEffect(() => {
        GetHistoryList();
    }, [])

    // 📥 Fetch all consultation sessions from the backend
    const GetHistoryList = async () => {
        const result = await axios.get('/api/session-chat?sessionId=all');
        console.log(result.data);
        setHistoryList(result.data); // update state with the response data
    }

    return (
        <div className='mt-10'>
            {
                historyList.length == 0 ? (
                    <div className='flex flex-col items-center justify-center p-7 border border-dashed rounded-2xl border-4'>
                        <Image src={'/medical-assistance.png'} alt='empty' width={150} height={150}/>
                        <h2 className='font-bold text-xl mt-5'>No Recent Consultations</h2>
                        <p>It looks like you haven't consulted with any doctors yet.</p>
                        <AddNewSessionDialoge/>
                    </div> ):(
                    // 📊 Show consultation history table
                <div>
                    <HistoryTable historyList={historyList} />
                </div>
            )}
        </div>
    )
}

export default HistoryList
