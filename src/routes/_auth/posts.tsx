import { loadPosts } from "@/api";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import z from "zod";

export const Route = createFileRoute("/_auth/posts")({
  component: RouteComponent,
  validateSearch: z.object({
    q: z.string().optional(),
    limit: z.number().optional(),
  }),
  loaderDeps: ({ search }) => ({ limit: search.limit }),
  loader: ({ deps }) => loadPosts({ limit: deps.limit }),
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();
  const { q, limit } = Route.useSearch();
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to="/posts/$id" params={{ id: post.id }}>
            {post.name}
          </Link>
        </div>
      ))}

      <hr />

      <div>Loader Query Param Value: {limit}</div>
      <div>
        <Link to="/posts" search={{ limit: 2 }}>
          Limit to 2 Posts
        </Link>
      </div>
      <div>
        <Link to="/posts" search={{}}>
          No Limit
        </Link>
      </div>

      <hr />

      <div>Non-Loader Query Param Value: {q}</div>
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
