"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { ArrowRight, Loader } from 'lucide-react'
import axios from 'axios'
import DoctorAgentCard, { doctorAgent } from './DoctorAgentCard'
import SuggestedDoctorCard from './SuggestedDoctorCard'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { SessionDetail } from '../medical-agent/[sessionId]/page'


function AddNewSessionDialoge() {
    const [note, setNote] = useState<string>();
    const [loading, setLoading] = useState(false);
    // const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>([]);
    const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[] | null>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>();
    const router = useRouter();
    const [historyList, setHistoryList] = useState<SessionDetail[]>([]);
    const { has } = useAuth();
    
    // ✅ Check if the user has a 'pro' plan using Clerk's has() helper
    //@ts-ignore
    const paidUser = has && has({ plan: 'pro' });

    useEffect(() => {
        GetHistoryList();
    }, [])

    // 📥 Fetch all consultation sessions from the backend
    const GetHistoryList = async () => {
        const result = await axios.get('/api/session-chat?sessionId=all');
        console.log(result.data);
        setHistoryList(result.data); // update state with the response data
    }

    const OnClickNext = async () => {
        setLoading(true);
        const result = await axios.post('/api/suggest-doctors', {
            notes: note
        });

        console.log(result.data);
        // setSuggestedDoctors(result.data);
        // new line from gpt
        setSuggestedDoctors(result.data.suggestedDoctors ?? []);
        setLoading(false);
    }

    const onStartConsultation = async () => {
        setLoading(true);
        //Save all info to database
        const result = await axios.post('/api/session-chat',{
            notes: note,
            selectedDoctor:selectedDoctor
        });
        console.log(result.data)
        if(result.data?.sessionId){
            console.log(result.data.sessionId);
            router.push('/dashboard/medical-agent/' + result.data.sessionId);
        }
        setLoading(false);
    }

    return (
        <Dialog>
            <DialogTrigger asChild><Button className='mt-3 hover:cursor-pointer' disabled={!paidUser && historyList?.length>=1}>+ Start a Consultation</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Basic Details</DialogTitle>
                    <DialogDescription asChild>
                        {
                            !suggestedDoctors ? <div>
                                <h2>Add Symptoms or Any Other Details</h2>
                                <Textarea placeholder='Add Detail here'
                                    className='h-[200px] mt-1'
                                    onChange={(e) => setNote(e.target.value)} />
                            </div> :
                            <div>
                                <h2>Select the Doctor</h2>
                                <div className='grid grid-cols-3 gap-5'>
                                    {/* //Suggested Doctors  */}
                                    {suggestedDoctors?.map((doctor, index) => (
                                        <SuggestedDoctorCard 
                                        doctorAgent={doctor} 
                                        key={index} 
                                        setSelectedDoctor={()=>setSelectedDoctor(doctor)}
                                        //@ts-ignore
                                        selectedDoctor={selectedDoctor}/>
                                    ))}
                                </div>
                            </div>
                        }
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={'outline'} className='hover:cursor-pointer'>Cancel</Button>
                    </DialogClose>
                    {
                        !suggestedDoctors ? <Button disabled={!note || loading} onClick={() => OnClickNext()} className='hover:cursor-pointer'>
                            Next {loading ? <Loader className='animate-spin' /> : <ArrowRight />}</Button> :
                            <Button disabled={loading|| !selectedDoctor} onClick={()=>onStartConsultation()} className='hover:cursor-pointer'>Start Consultation
                            {loading ? <Loader className='animate-spin' /> : <ArrowRight />}</Button>
                    }
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddNewSessionDialoge
