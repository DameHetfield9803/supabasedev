'use memo';
import { createClient } from '@/utils/supabase/server';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Countries() {
    const supabase = await createClient();

    const { data: trips } = await supabase
        .from('trips')
        .select('*').order('id')
    return (
        <div>
            <Table>
                <TableCaption className="mb-4">List of all trips</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Trip Number</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Price per day</TableHead>
                        <TableHead>Total days</TableHead>
                        <TableHead>Total cost</TableHead>
                        <TableHead>Edit trips</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trips?.map((trip) => (
                        <TableRow key={trip.id}>
                            <TableCell>{trip.id}</TableCell>
                            <TableCell>{trip.destination}</TableCell>
                            <TableCell>{trip.price_per_day}</TableCell>
                            <TableCell>{trip.days}</TableCell>
                            <TableCell>{trip.total_price}</TableCell>
                            <TableCell><Link href="/trips/edit-trips"><Button>Edit</Button></Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='space-x-4'>
                <Link href="/trips/create-trips"><Button>Add trip</Button></Link>
                <Link href="/trips/delete-trips"><Button>Delete trip</Button></Link>
            </div>
        </div>
    )
}