import { loadPost } from "@/api";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/posts/$id")({
  component: RouteComponent,
  loader: ({ params }) => loadPost(params.id),
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return (
    <div>
      <div>{post.name}</div>
      <div>{post.description}</div>
      <div>
        <Link to="/posts/$id/edit" params={{ id: post.id }}>
          Edit
        </Link>
      </div>
    </div>
  );
}
