import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://othmgmckjkdtpfeujdsa.supabase.co';
// TEMPORARIAMENTE: Use a chave service_role para testar
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aG1nbWNramtkdHBmZXVqZHNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODg4MzY3MiwiZXhwIjoyMDY0NDU5NjcyfQ.gDGjS_K76X8OwC2YaeAyxpE4RX3NPoDbV1D4fGVfwKg';

export const supabase = createClient(supabaseUrl, supabaseKey);