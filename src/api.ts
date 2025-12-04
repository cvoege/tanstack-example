async function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

const POSTS = [
  { id: "1", name: "Post 1", description: "This is the first post" },
  { id: "2", name: "Post 2", description: "This is the second post" },
  { id: "3", name: "Post 3", description: "This is the third post" },
  { id: "4", name: "Post 4", description: "This is the fourth post" },
  { id: "5", name: "Post 5", description: "This is the fifth post" },
];

export async function loadPosts() {
  console.log("loadPosts");
  await wait(2000);
  return {
    crumb: "Posts",
    posts: POSTS.map(({ description: _, ...post }) => post),
  };
}
export async function loadPost(id: string) {
  console.log("loadPost");
  await wait(500);
  const post = POSTS.find((p) => p.id === id);
  if (!post) {
    throw new Error("Guh");
  }
  return { post, crumb: post.name };
}
