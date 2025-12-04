import { loadPost } from "@/api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
  component: RouteComponent,
  loader: ({ params }) => loadPost(params.id),
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  return (
    <div>
      <div>{post.name}</div>
      <div>{post.description}</div>
    </div>
  );
}
