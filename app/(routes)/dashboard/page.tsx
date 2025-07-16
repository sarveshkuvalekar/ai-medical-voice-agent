import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsAgentList from './_components/DoctorsAgentList'
import AddNewSessionDialoge from './_components/AddNewSessionDialoge'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ContactUs from './_components/ContactUs'

function Dashboard() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>My Dashboard</h2>
        <AddNewSessionDialoge/>
      </div>
      <HistoryList/>
      <DoctorsAgentList/>
      <ContactUs/>
    </div>
  )
}

export default Dashboard
