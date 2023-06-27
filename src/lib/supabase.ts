
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = "https://pgkbunhhoqvgtodvqnkr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBna2J1bmhob3F2Z3RvZHZxbmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4NjQxOTYsImV4cCI6MjAwMzQ0MDE5Nn0.p9OEijQahCMDRb4GVoWjCIZ0cbMMmdXCVwC5GSHYRrg"

// mtIhF6yThBRLdDZQ
export const supabaseClient = createClient(supabaseUrl, supabaseKey)

