import styles from "./notepost.module.css"

export default function NotePost({ params }: { params: { post: string } }) {
  return (
    <>
      My note {params.post}
    </>
  );
}
