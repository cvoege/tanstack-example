import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Authed Route</h1>
      <Link to="/">Logout</Link>
      <hr />
      <Outlet />
    </div>
  );
}
