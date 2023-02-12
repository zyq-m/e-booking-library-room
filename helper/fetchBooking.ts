import { SupabaseClient } from "@supabase/supabase-js";

export async function fetchNotApprovedRoom(supabase: SupabaseClient) {
  const booking = await supabase
    .from("booking")
    .select(
      `
        user(
            name
        ),
        room(
            name
        ),
        from,
        to,
        date,
        bookingId
    `
    )
    .eq("approved", false);

  return booking;
}

export async function fetchBooking(supabase: SupabaseClient) {
  const booking = await supabase.from("booking").select(
    `
    user(
      name
      ),
      room(
        name
    ),
    from,
    to,
    date,
    bookingId
    `
  );

  return booking;
}
