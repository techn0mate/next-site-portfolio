import React from "react";
import Link from 'next/link'
import getAllPosts from "../lib/posts";
import MyHead from "../components/MyHead";

const Blogs = ({ data }) => {
    console.log(`${process.env.BACKEND_URL}/wp/v2/posts?_embed`);
  return (
    <>
      <MyHead
        title="Blog"
        description="Blog by Soumya Mondal"
        image="https://soumyamondal.com/icon.png"
        url="https://soumyamondal.com/blog"
        />
      <div>
        <section className="blog-section">
          <h1 className='text-center text-5xl py-5 md:py-16 font-extrabold'>My <span className='text-indigo-500'>Blog</span></h1>
          <div className="gap-5 w-4/5 m-auto flex flex-col lg:flex-row flex-wrap justify-evenly">
            {data.map((post, index) => {
              return (
                <Link key={index} href={`/blog/${post['slug']}`}>
                  <div className="cursor-pointer mb-10 bg-white p-1 flex-wrap rounded-2xl text-black w-full sm:w-5/6 md:w-5/6 lg:w-5/6">
                  <img
                    className="mb-5 rounded-2xl w-full h-auto max-h-60 object-cover"
                    src={ 'wp:featuredmedia' in post._embedded && post._embedded['wp:featuredmedia'].length > 0 ? post._embedded['wp:featuredmedia'][0].source_url : 'fallback-image-url'}
                  />
                    <h4 className="font-medium mb-1 text-md pl-2">{post['title']['rendered']}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const res = await getAllPosts();
  return {props: { data: res}};
}