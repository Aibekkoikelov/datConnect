import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ywlypscitjsleqnjuvbc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bHlwc2Npd'
        + 'GpzbGVxbmp1dmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NjkxMDgsImV4cCI6MjAwMDQ0NTEwOH0.mUS5ya009P1F9ciIWkchj0xlH3GzSNCjN6EIisL6jGg';
export default createClient(supabaseUrl, supabaseKey);
