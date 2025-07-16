import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SessionDetail } from '../medical-agent/[sessionId]/page'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import ViewReportDialog from './ViewReportDialog'

type Props = {
    historyList: SessionDetail[] // Array of session records to display
}

/**
 * HistoryTable Component
 * 
 * Displays a table listing previous consultation sessions including:
 * - AI Medical Specialist
 * - Notes/Description
 * - Created Date
 * - View Report Action
 */
function HistoryTable({ historyList }: Props) {
    return (
        <div>
            <Table>
                {/* 📋 Caption for accessibility and context */}
                <TableCaption>Previous Consultation Reports</TableCaption>

                {/* 🧾 Table Header Row */}
                <TableHeader>
                    <TableRow>
                        <TableHead>AI Medical Specialist</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                {/* 📄 Table Body */}
                <TableBody>
                    {historyList.map((record: SessionDetail, index: number) => (
                        <TableRow key={index}>
                            {/* Doctor specialty */}
                            <TableCell className="font-medium">
                                {record.selectedDoctor.specialist}
                            </TableCell>

                            {/* Session notes or symptoms */}
                            <TableCell>{record.notes}</TableCell>

                            {/* Human-readable timestamp */}
                            <TableCell>
                                {moment(new Date(record.createdOn)).fromNow()}
                            </TableCell>

                            {/* 🔍 View Report Action */}
                            <TableCell className="text-right">
                                <ViewReportDialog record={record} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default HistoryTable
