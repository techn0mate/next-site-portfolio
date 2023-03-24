<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router';

import PostDetail from '../../components/postDetail';
import PostWidget from '../../components/postWidget';
import { getPosts, getPostDetails } from '../../services';
// import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}
=======
import Link from 'next/link'
import { GraphQLClient, gql } from 'graphql-request';
import styles from "../../styles/post.module.css";
import MyHead from "../../components/MyHead";

const graphCms = new GraphQLClient('https://ap-south-1.cdn.hygraph.com/content/clfl2qhu008f801uh5knw6eld/master');

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
        };
    }

export default function Home({post}){

    return(
        <>
        <MyHead
        title={post.title}
        description={post.excerpt}
        image={post.coverImage.url}
        url={`https://soumyamondal.com/blog/${post.slug}`}
        />
        <div className="max-w-6xl m-auto">
                    <div className="flex flex-col lg:flex-row mt-10 sm:flex-col">
                        <div className="w-full lg:w-7/12 m-auto bg-white rounded-3xl relative mb-5 shadow-xl">
                            <div className="m-auto bg-white rounded-3xl relative">
                                <div className="rounded-t-2xl overflow-hidden">
                                    
                                    <img
                                    className="max-w-4xl w-full m-auto max-h-44 object-cover"
                                    src={post.coverImage.url}
                                />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl"></div>
                                </div>
                            </div>
                        <div className="max-w-2xl m-auto bg-white p-6 rounded-xl text-gray-900">
                            <div title="Author">
                                <Link href="/portfolio" className="author flex flex-row py-4 items-center"><img className="w-6 h-6 rounded-full" src="/soumya2.jpg" alt="post author"/>
                                <p className='pl-3 pr-1 font-bold text-sm'>Soumya</p>
                                <svg className="w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00AEFF"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 12.5 11 15l4.5-4.5m-.595-5.512-.48-.659a3 3 0 0 0-4.85 0l-.48.659-.804-.127a3 3 0 0 0-3.43 3.43l.127.804-.659.48a3 3 0 0 0 0 4.85l.659.48-.127.804a3 3 0 0 0 3.43 3.43l.804-.127.48.659a3 3 0 0 0 4.85 0l.48-.659.804.127a3 3 0 0 0 3.43-3.43l-.127-.804.659-.48a3 3 0 0 0 0-4.85l-.659-.48.127-.804a3 3 0 0 0-3.43-3.43l-.804.127z"/></svg>
                                <h6 className={styles.date + " text-sm text-gray-400"}>Updated: {post.updatedAt.slice(0, 10)}</h6>
                                </Link>
                            </div>
                            <h4 className={styles.title + " post-title mb-3 text-4xl font-bold font-mono"}>{post.title}</h4>
>>>>>>> a4cebb22330f1fb84992e79cf0d57b8bd35968f5

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
            title
            slug
            excerpt
            updatedAt
            coverImage {
                url
            }
            content {
                html
            }
        }
    }
    `;

    const result = await graphCms.request(query, { slug });
    return result.post;
};



export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
        edges {
            node {
            createdAt
            slug
            title
            excerpt
            }
        }
        }
    }
    `;

    const result = await graphCms.request(query);
    return result.postsConnection.edges;
};
