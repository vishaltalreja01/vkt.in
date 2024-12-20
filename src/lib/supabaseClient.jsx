import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// A Supabase client object for making requests to a Supabase server.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

/**
 * Asynchronously fetches all certificates from the database where the 'pinned' column is set to true.
 * The results are sorted by the 'created_at' column in descending order.
 */
export async function getCertificates() {
  let { data: certificates, error } = await supabase
    .from("certificates")
    .select("*")
    .order("created_at", { ascending: false });

  return {
    certificates,
    error: error !== null,
  };
}
