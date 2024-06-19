export default function PostPage({ params }: { params: { post: string } }) {
  return (
    <>
      My post {params.post}
    </>
  );
}