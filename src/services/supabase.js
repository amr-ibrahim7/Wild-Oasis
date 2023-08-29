import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uihgezvlbnsawzjawdmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpaGdlenZsYm5zYXd6amF3ZG1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1MzYzNDEsImV4cCI6MjAwODExMjM0MX0.ERO4BSOZq4atKKjqaAu6KGBVxV_Lyl1jEWBu1ObdnmI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
