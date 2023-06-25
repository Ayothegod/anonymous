
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = "https://tjiecbhqyejybvgbusxi.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaWVjYmhxeWVqeWJ2Z2J1c3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MjI2NTMsImV4cCI6MjAwMzI5ODY1M30.Lf0R2X7CGj4rdoQoUXQRWfmfEr6xJpTs05luety_Id8"

// mtIhF6yThBRLdDZQ
export const supabaseClient = createClient(supabaseUrl, supabaseKey)

