"use client";

import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useSWR from "swr";
import {fetcher} from "@/lib/fetcher";

export default async function ProjectTable() {
    const { data, error, isLoading } = useSWR('/api/repos', fetcher)
    console.log(data)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <Card className="border-border p-0 m-0">
            <CardContent className="h-[50vh] w-[60vw] p-0 m-0">
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-border border-solid hover:bg-background">
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
