import { supabase } from "../lib/supabase";

export async function fetchNotApprovedRoom() {
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
