// app/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// URL e anon key do seu projeto Supabase
const supabaseUrl = 'https://othmgmckjkdtpfeujdsa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aG1nbWNramtkdHBmZXVqZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDgyMzAsImV4cCI6MjA2NDYyNDIzMH0.Y1S6YTBjfsRNQ-afbal1QIJ6iWjcrjldq0587XoTVj8';

// Validação simples para garantir que as credenciais não estejam vazias
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Credenciais do Supabase não definidas. Verifique supabaseUrl e supabaseAnonKey.'
    );
}

// Cria o cliente Supabase — ele inclui “apikey” em todas as requisições
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// (Opcional) Helpers de autenticação podem ser adicionados abaixo
// export async function signInWithEmail(email, password) {
//   const { data, error } = await supabase.auth.signInWithPassword({ email, password });
//   if (error) throw error;
//   return data;
// }
//
// export async function signOut() {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw error;
// }
//
// export function onAuthStateChange(callback) {
//   return supabase.auth.onAuthStateChange(callback);
// }