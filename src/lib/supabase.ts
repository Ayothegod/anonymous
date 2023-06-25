
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = "https://beghxywudtulakxqbtnj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZ2h4eXd1ZHR1bGFreHFidG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MzAxMjAsImV4cCI6MjAwMzMwNjEyMH0.k18bn8gZBs2l3c2HKgHBSHrUMVrkgppK-oqGxTRIv0E"

// mtIhF6yThBRLdDZQ
export const supabaseClient = createClient(supabaseUrl, supabaseKey)

