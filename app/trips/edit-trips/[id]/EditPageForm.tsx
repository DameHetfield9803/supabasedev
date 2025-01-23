'use client'
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function getID() {
    const supabase = createClient();
    const params = await useParams()
    const id = params.id;
    const { data: trips } = supabase.from('trips').select('id').eq('id', trip.id);
}

export default function EditTripForm({ trip }: { trip: any }) {
    const [changes, setChanges] = useState(trip);
    return (
        <>
            <div>
                <h1></h1>
            </div>
        </>
    )
}