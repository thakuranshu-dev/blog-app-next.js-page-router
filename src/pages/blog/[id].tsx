// Blog page (content fo blog) | Page router
import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post: any)=>(
    {
      params: {id: post.id.toString()},
    }
  ));

  return {paths, fallback: false};
}

export async function getStaticProps({params}:{params: {id: string}}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {props: {post},};
}

export default function BlogPost({post}: {post: any}){
  return(
    <div className="p-6 h-screen flex flex-col justify-center items-center">
      <div className="p-4 rounded border border-blue-500">
        <h1 className="text-3xl text-left font-bold mb-4">{post.title}</h1>
        <div title={`Blog post ${post.id}`}
        className="bg-gray-100 p-4 rounded text-gray-900">
          <p className="mb-4 text-justify">{post.body}</p>
        </div>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 block text-left">
          ← Back to Blog
        </Link>
      </div>
    </div>
  )
}