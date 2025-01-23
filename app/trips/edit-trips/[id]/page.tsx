// app/trips/edit-trips/[id]/page.tsx
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import EditTripForm from './EditPageForm';

export default async function EditPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();

    // Fetch the specific trip by ID
    const { data: trip, error } = await supabase
        .from('trips')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error || !trip) {
        redirect('/trips'); // Redirect if trip not found
    }

    return <EditTripForm trip={trip} />
}