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

export default async function Countries() {
    const supabase = await createClient();

    const { data: countries } = await supabase
        .from('countries')
        .select('*')
    return (
        <div>
            <Table>
                <TableCaption>List of all countries</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[128px]">Country ID</TableHead>
                        <TableHead>Country Name</TableHead>
                        <TableHead>Country Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {countries?.map((country) => (
                        <TableRow key={country.id}>
                            <TableCell>{country.id}</TableCell>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>{country.code}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}