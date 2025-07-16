"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Loader2Icon } from 'lucide-react'


export type doctorAgent = {
    id: number,
    specialist:string,
    description:string,
    image:string,
    agentPrompt: string,
    voiceId? : string,
    subscriptionRequired: boolean 
}

type props = {
    doctorAgent: doctorAgent
}

function DoctorAgentCard({ doctorAgent }: props) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { has } = useAuth();

    // ✅ Check if the user has a 'pro' plan using Clerk's has() helper
    //@ts-ignore
    const paidUser = has && has({ plan: 'pro' });

    const onStartConsultation = async () => {
        setLoading(true);

        // Post the new session to backend API
        const result = await axios.post('/api/session-chat', {
            notes: 'New Query',
            selectedDoctor: doctorAgent
        });

        if (result.data?.sessionId) {
            // Navigate to the new session page
            router.push('/dashboard/medical-agent/' + result.data.sessionId);
        }

        setLoading(false);
    }

    return (
        <div className='relative border border-green-600 rounded-xl p-1 bg-lime-50'>
            {doctorAgent.subscriptionRequired && (
                <Badge className='absolute m-2 right-0'>Premium</Badge>
            )}
            <Image src={doctorAgent.image} alt={doctorAgent.specialist} width={200} height={300} className='w-full h-[350px] object-cover border border-green-600 rounded-xl'/>
            <h2 className='font-bold mt-1 text-center'>{doctorAgent.specialist}</h2>
            <p className='line-clamp-2 mt-1 text-sm text-gray-500'>{doctorAgent.description}</p>
            <Button 
                onClick={onStartConsultation}
                className='w-full mt-2 hover:cursor-pointer' 
                disabled={!paidUser && doctorAgent.subscriptionRequired}
            >
                Start Consultation{' '}
                {loading ? (
                    <Loader2Icon className='animate-spin' />
                ) : (
                    <ArrowRight />
                )}
            </Button>
        </div>
    )
}

export default DoctorAgentCard
