
import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl = "https://csnmtqncmduojhmnydan.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzbm10cW5jbWR1b2pobW55ZGFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0OTE5NzMsImV4cCI6MjAwMzA2Nzk3M30.rxxTDgTHV_4cv2qaqRlmYB14jfTAiRuYF4jADRHJiw0"

// mtIhF6yThBRLdDZQ
export const supabaseClient = createClient(supabaseUrl, supabaseKey)

