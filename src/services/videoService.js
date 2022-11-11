import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://clolccuvodupbxaurasi.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsb2xjY3V2b2R1cGJ4YXVyYXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODc4NjIsImV4cCI6MTk4Mzc2Mzg2Mn0.WhNDlYkXTENqx-PHC1axbjLcmS0LHaQPgfQX-FXqDcY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
} 