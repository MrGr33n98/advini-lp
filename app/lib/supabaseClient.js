import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://othmgmckjkdtpfeujdsa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aG1nbWNramtkdHBmZXVqZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDgyMzAsImV4cCI6MjA2NDYyNDIzMH0.Y1S6YTBjfsRNQ-afbal1QIJ6iWjcrjldq0587XoTVj8';

export const supabase = createClient(supabaseUrl, supabaseKey);