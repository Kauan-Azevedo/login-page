const { createClient } = supabase;

const supabaseUrl = "https://hrcbtgqjbniafxtlxxmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyY2J0Z3FqYm5pYWZ4dGx4eG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NjQ5OTMsImV4cCI6MjA0NTA0MDk5M30.r1pcxfXZ8rj3ujqTakREYMCqoU5onEL-fSB4hs5_sCo";

const supabaseClient = createClient(supabaseUrl, supabaseKey);

const loginForm = document.querySelector(".login-btn");
const googleBtn = document.querySelector(".google-btn");

loginForm.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error: ", error.message);
    } else {
      console.log("Success: ", data);
    }
  } catch (err) {
    console.error("Unexpected error: ", err);
  }
});

googleBtn.addEventListener("click", async (e) => {
  e.preventDefault;

  try {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error: ", error.message);
    } else {
      console.log("Success: ", data);
    }
  } catch (err) {
    console.error("Unexpected error: ", err);
  }
});
