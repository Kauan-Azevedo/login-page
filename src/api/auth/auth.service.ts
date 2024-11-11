import { redirect } from "@tanstack/react-router";
import supabase from "../api";

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
};

export const signInGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3001/",
    },
  });
  if (error) throw new Error(error.message);
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};

export const isAuthenticated = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    return false;
  }
  return data.session;
};

export const setupAuthListener = () => {
  const { data: authListener } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      if (session) {
        redirect({ to: "/" });
      } else {
        redirect({ to: "/auth" });
      }
    }
  );

  return () => {
    authListener.subscription.unsubscribe();
  };
};
