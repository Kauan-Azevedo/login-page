import { createFileRoute } from "@tanstack/react-router";

import "../css/styles.css";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return <div>Home page</div>;
}
