import React, {useState, useEffect} from "react";
import Head from "next/head";
import Link from 'next/link'
import getAllPosts from "../lib/posts";

const Blogs = ({ data }) => {
    console.log(`${process.env.BACKEND_URL}/wp/v2/posts?_embed`);
  return (
    <>
      <Head>
        <title>Blogs - TypeFinance</title>
        <meta name="TypeFinance" content="Blogs typeFinance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <section className="blog-section">
          <h3>
            Blogs by <span className="head-knowledge-base">TypeFinance</span>
          </h3>
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

// export async function getServerSideProps() {
//   const getProps = await fetch(
//     `${process.env.BACKEND_URL}/wp/v2/posts?_embed`
//   );
//   const data = await getProps.json();
//   if(data) return { props: { data } };
//   else{
//     const res ='/backup.json'.json()
//     return { props: { res } } ;
//   }
// } 

export async function getServerSideProps() {
  const res = await getAllPosts();
  return {props: { data: res}};
}