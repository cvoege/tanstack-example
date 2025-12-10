import { loadPost } from "@/api";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/posts_/$id/edit")({
  component: RouteComponent,
  loader: ({ params }) => loadPost(params.id),
});

function RouteComponent() {
  const { post } = Route.useLoaderData();

  return (
    <div>
      <h3>This is the edit page for {post.id}</h3>
      <div>
        <Link to="/posts/$id" params={{ id: post.id }}>
          Back to post
        </Link>
      </div>
    </div>
  );
}
