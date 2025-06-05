// app/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// URL e anon key completos do seu projeto Supabase
const supabaseUrl = 'https://othmgmckjkdtpfeujdsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aG1nbWNramtkdHBmZXVqZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDgyMzAsImV4cCI6MjA2NDYyNDIzMH0.Y1S6YTBjfsRNQ-afbal1QIJ6iWjcrjldq0587XoTVj8';

// Validação simples para garantir que as credenciais não estejam vazias
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Credenciais do Supabase não definidas. Verifique supabaseUrl e supabaseAnonKey.'
    );
}

// Cria o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);