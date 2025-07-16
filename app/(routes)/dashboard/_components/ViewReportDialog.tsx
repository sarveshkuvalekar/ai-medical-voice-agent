import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SessionDetail } from '../medical-agent/[sessionId]/page'
import moment from 'moment'

type props = {
    record: SessionDetail // A single consultation session record
}

/**
 * ViewReportDialog Component
 * 
 * Displays a full detailed medical report in a dialog when the user clicks "View Report".
 */
function ViewReportDialog({ record }: props) {
    const report: any = record?.report // Extract the report object from the session record
    const formatDate = moment(record?.createdOn).format("MMMM Do YYYY, h:mm a") // Format date nicely

    return (
        <Dialog>
            {/* 🧿 Button to trigger the dialog */}
            <DialogTrigger>
                <Button variant={'link'} size={'sm'}>View Report</Button>
            </DialogTrigger>

            {/* 🗂️ Dialog content container */}
            <DialogContent className="max-h-[90vh] overflow-y-auto bg-white shadow-lg p-6 border border-gray-200 w-[700px]">
                <DialogHeader>
                    {/* 🩺 Report Title */}
                    <DialogTitle asChild>
                        <h2 className='text-center text-3xl font-bold text-blue-500 mb-6'>
                            🩺 Medical AI Voice Agent Report
                        </h2>
                    </DialogTitle>

                    {/* 📄 Report Description Content */}
                    <DialogDescription asChild>
                        <div className='space-y-6 text-gray-800 text-sm'>

                            {/* 📁 Section 1: Session Info */}
                            <div>
                                <h3 className='text-lg font-semibold text-blue-500'>Session Info</h3>
                                <hr className='border-t-2 border-blue-500 my-2' />
                                <div className='grid grid-cols-2 gap-3'>
                                    <p><strong>Doctor:</strong> {record?.selectedDoctor?.specialist}</p>
                                    <p><strong>User:</strong> {report?.user || 'Anonymous'}</p>
                                    <p><strong>Consulted On:</strong> {formatDate}</p>
                                    <p><strong>Agent:</strong> {report?.agent}</p>
                                </div>
                            </div>

                            {/* 🤒 Section 2: Chief Complaint */}
                            <div>
                                <h3 className='text-lg font-semibold text-blue-500'>Chief Complaint</h3>
                                <hr className='border-t-2 border-blue-500 my-2' />
                                <p>{report?.chiefComplaint}</p>
                            </div>

                            {/* 🧾 Section 3: Summary */}
                            <div>
                                <h3 className='text-lg font-semibold text-blue-500'>Summary</h3>
                                <hr className='border-t-2 border-blue-500 my-2' />
                                <p>{report?.summary}</p>
                            </div>

                            {/* 🤧 Section 4: Symptoms */}
                            <div>
                                <h3 className='text-lg font-semibold text-blue-500'>Symptoms</h3>
                                <hr className='border-t-2 border-blue-500 my-2' />
                                <ul className='list-disc list-inside'>
                                    {report?.symptoms?.map((symptom: string, index: number) => (
                                        <li key={index}>{symptom}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* ⏱️ Section 5: Duration & Severity */}
                            <div>
                                <h3 className='text-lg font-semibold text-blue-500'>Duration & Severity</h3>
                                <hr className='border-t-2 border-blue-500 my-2' />
                                <div className='grid grid-cols-2 gap-3'>
                                    <p><strong>Duration:</strong> {report?.duration || 'Not specified'}</p>
                                    <p><strong>Severity:</strong> {report?.severity}</p>
                                </div>
                            </div>

                            {/* 💊 Section 6: Medications */}
                            {report?.medicationsMentioned?.length > 0 && (
                                <div>
                                    <h3 className='text-lg font-semibold text-blue-500'>Medications Mentioned</h3>
                                    <hr className='border-t-2 border-blue-500 my-2' />
                                    <ul className='list-disc list-inside'>
                                        {report?.medicationsMentioned.map((med: string, index: number) => (
                                            <li key={index}>{med}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* 📋 Section 7: Recommendations */}
                            {report?.recommendations?.length > 0 && (
                                <div>
                                    <h3 className='text-lg font-semibold text-blue-500'>Recommendations</h3>
                                    <hr className='border-t-2 border-blue-500 my-2' />
                                    <ul className='list-disc list-inside'>
                                        {report?.recommendations.map((rec: string, index: number) => (
                                            <li key={index}>{rec}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* 📝 Disclaimer Footer */}
                            <div className='pt-6 border-t border-gray-300 text-center text-xs text-gray-500'>
                                This report was generated by an AI Medical Assistant for informational purposes only.
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ViewReportDialog
