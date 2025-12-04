import { loadPosts } from "@/api";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import z from "zod";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
  loader: () => loadPosts(),
  validateSearch: z.object({ q: z.string().optional() }),
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();
  const { q } = Route.useSearch();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to="/posts/$id" params={{ id: post.id }}>
            {post.name}
          </Link>
        </div>
      ))}

      <hr />

      <div>Query Param Value: {q}</div>
      <div>
        <Link to="/posts" search={{ q: "q1" }}>
          q1
        </Link>
      </div>
      <div>
        <Link to="/posts" search={{ q: "q2" }}>
          q2
        </Link>
      </div>
      <hr />

      <Outlet />
    </div>
  );
}
