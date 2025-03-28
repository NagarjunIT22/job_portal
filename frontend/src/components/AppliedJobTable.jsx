import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Job Role</TableHead>
                <TableHead className="text-gray-400">Company</TableHead>
                <TableHead className="text-right text-gray-400">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2].map((item , index) => (
                    <TableRow key={index}>
                        <TableCell>17-07-2024</TableCell>
                        <TableCell>Froetened Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right"><Badge className="rounded-full">Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
