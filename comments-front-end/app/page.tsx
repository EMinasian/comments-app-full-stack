import CommentsSection from "@/components/CommentsSection";
import getAllComments from "@/utils/getAllComments";

export default async function Home() {

  const { items } = await getAllComments()

  return (
    <html>
      <body>
        <main className="">
          <CommentsSection comments={items}/>
        </main>
      </body>
    </html>
  )
}
