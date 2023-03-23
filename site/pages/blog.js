import MyHead from "../components/MyHead";
import { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';

const graphCms = new GraphQLClient('https://ap-south-1.cdn.hygraph.com/content/clfl2qhu008f801uh5knw6eld/master');

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await graphCms.request(`
        {
          posts {
            id
            title
            slug
            coverImage {
              url
            }
          }
        }
      `);

      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <MyHead
        title="Blog"
        description="Blog by Soumya Mondal"
        image="https://soumyamondal.com/soumya2.jpg"
        url="https://soumyamondal.com/blog"
        />
      <div>
        <section className="blog-section">
          <h1 className='text-center text-5xl py-5 md:py-16 font-extrabold'>My <span className='text-indigo-500'>Blog</span></h1>
          <div className="gap-5 w-4/5 m-auto flex flex-col lg:flex-row flex-wrap justify-evenly">
            {posts.map((post) => {
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="cursor-pointer mb-10 bg-white p-1 flex-wrap rounded-2xl text-black w-full sm:w-5/6 md:w-5/6 lg:w-5/6">
                  <img
                    className="mb-5 rounded-2xl w-full h-auto max-h-60 object-cover"
                    src={post.coverImage.url}
                  />
                    <h4 className="font-medium mb-1 text-md pl-2">{post.title}</h4>
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
