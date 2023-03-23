import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';
import styles from '../../styles/post.module.css';
import MyHead from '../../components/MyHead';

const apolloClient = new ApolloClient({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/clfl2qhu008f801uh5knw6eld/master',
  cache: new InMemoryCache(),
});

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetPostSlugs {
        postsConnection {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  return {
    paths: data.postsConnection.edges.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await apolloClient.query({
    query: gql`
      query GetPostDetails($slug: String!) {
        post(where: { slug: $slug }) {
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
    `,
    variables: { slug: params.slug },
  });

  return {
    props: {
      post: data.post,
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

                            <span className={styles.content + " blog-content py-10 text-sm rounded-xl space-y pb-10"} dangerouslySetInnerHTML={{__html:post.content.html}}/>
                        </div>                        
                    </div>
                </div>
        </div>
        </>
    )
}
