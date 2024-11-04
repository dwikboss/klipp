import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eprhjwoyxjzjfzfrnuhe.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwcmhqd295eGp6amZ6ZnJudWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NTQ1MjUsImV4cCI6MjA0NjIzMDUyNX0.c0VTHKcB8J7x3vWqv2v_Tslq8pAd0OF3_-rINR97W_k', {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
