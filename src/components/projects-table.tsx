"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {Project} from "@/types/project";
import formatDate from "@/lib/format-date";
import Link from "next/link";

type Props = {
    data: Project[]
}

export default function ProjectsTable({data}: Props) {
    return (
        <div className={'max-h-[50vh] w-full border-[1px] border-border rounded overflow-y-auto'}>
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-border border-solid hover:bg-background">
                        <TableHead className="w-[25%]">Name</TableHead>
                        <TableHead className="w-[50%]">Description</TableHead>
                        <TableHead>Updated at</TableHead>
                        <TableHead className="text-right w-[15%]">Language</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map(item => (
                        <Link href={item.url} target='_blank' legacyBehavior key={item.id}>
                            <TableRow key={item.id} className="border-border cursor-pointer">
                                <TableCell className="font-medium text-left">{item.name.replace(/-/g, ' ').toUpperCase()}</TableCell>
                                <TableCell className={'text-left'}>{item.description}</TableCell>
                                <TableCell className={'text-left'}>{formatDate(item.updatedAt)}</TableCell>
                                <TableCell className="text-right">{item.language}</TableCell>
                            </TableRow>
                        </Link>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}