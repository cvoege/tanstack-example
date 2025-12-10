import {
  createFileRoute,
  Link,
  Outlet,
  useMatches,
} from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const matches = useMatches();
  const crumbs = matches.filter((match) => match.loaderData?.crumb);
  return (
    <div>
      <h1>Authed Route</h1>

      <div className="flex items-center gap-2">
        <div>Breadcrumbs:</div>
        {crumbs.map((crumb, i) => {
          const content = crumb.loaderData?.crumb;
          return (
            <Fragment key={crumb.id}>
              <Link to={crumb.pathname}>{content}</Link>
              {i !== crumbs.length - 1 && <div>/</div>}
            </Fragment>
          );
        })}
      </div>
      <Link to="/">Logout</Link>
      <hr />
      <Outlet />
    </div>
  );
}
