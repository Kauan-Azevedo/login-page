import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { setupAuthListener } from "../api/auth/auth.service";
import { signOut, isAuthenticated } from "../api/auth/auth.service";

import "../css/styles.css";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) throw redirect({ to: "/login" });
  },
  component: HomeComponent,
});

function HomeComponent() {
  const navigate = useNavigate({ from: "/" });
  const handleLogout = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        console.error("User not authenticated");
      }
      await signOut();
      alert("signOut!");
      navigate({ to: "/login" });
    } catch (error: any) {
      if (error.message === "Auth session missing!") {
        navigate({ to: "/login" });
      }
    }
  };

  useEffect(() => {
    const unsubscribe = setupAuthListener();
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Página Inicial</h1>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
}
