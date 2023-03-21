import React from "react";
import Link from 'next/link'
import styles from "../../styles/post.module.css";
import MyHead from "../../components/MyHead";
import getSidebarPosts from "../../lib/sidebarPost";
import getSinglePost from "../../lib/singlePost";

export default function Home({res, allPosts}){
    // console.log(posts);
    return(
        <>
        <MyHead
        title={res.title}
        description={res.excerpt}
        image={res.thumbnail}
        url={res.permalink}
        />
        <div className="max-w-6xl m-auto">
                    <div className="flex flex-col lg:flex-row mt-10 sm:flex-col">
                        <div className="w-full lg:w-7/12 m-auto bg-white rounded-3xl relative mb-5 shadow-xl">
                            <div className="m-auto bg-white rounded-3xl relative">
                                <div className="rounded-t-2xl overflow-hidden">
                                    
                                    <img
                                    className="max-w-2xl w-full m-auto max-h-44 object-cover"
                                    src={res.thumbnail}
                                />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl"></div>
                                </div>
                            </div>
                        <div className="max-w-2xl m-auto bg-white p-6 rounded-xl text-gray-900">
                            <div title="Author" className="author flex flex-row py-4">
                                <img className="w-6 rounded-full" src="/typefinance-dp.jpg" alt="post author"/>
                                <h6 className="font-bold px-2">Soumya Mondal</h6>
                                <svg className="w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00AEFF"><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 12.5 11 15l4.5-4.5m-.595-5.512-.48-.659a3 3 0 0 0-4.85 0l-.48.659-.804-.127a3 3 0 0 0-3.43 3.43l.127.804-.659.48a3 3 0 0 0 0 4.85l.659.48-.127.804a3 3 0 0 0 3.43 3.43l.804-.127.48.659a3 3 0 0 0 4.85 0l.48-.659.804.127a3 3 0 0 0 3.43-3.43l-.127-.804.659-.48a3 3 0 0 0 0-4.85l-.659-.48.127-.804a3 3 0 0 0-3.43-3.43l-.804.127z"/></svg>
                                <h6 className={styles.date + " text-sm text-gray-400"}>Updated: {res.postDate}</h6>
                            </div>
                            <h4 className={styles.title + " post-title mb-3 text-4xl font-bold font-mono"}>{res.title}</h4>

                            <span className={styles.content + " blog-content py-10 text-sm rounded-xl space-y pb-10"} dangerouslySetInnerHTML={{__html:res.content}}></span>
                        </div>                        
                    </div>
                    <div className="sidebar h-auto w-80 max-w-80 h-4/5 bg-white rounded-xl m-auto my-10">
                        <img className="w-11/12 m-auto rounded-2xl my-3" src="/typefinance.gif"/>
                        <h5 className="text-gray-800 font-bold text-center font-mono text-xl pb-5">Related posts:</h5>
                        {allPosts.map((post, index)=>{
                            return (
                            <Link key={index} href={`/blog/${post['slug']}`}>
                                <div className="cursor-pointer max-w-72">
                                
                                <img
                                    className="m-auto rounded-xl w-72"
                                    src={ 'wp:featuredmedia' in post._embedded && post._embedded['wp:featuredmedia'].length > 0 ? post._embedded['wp:featuredmedia'][0].source_url : 'fallback-image-url'}
                                />
                                <h4 className="font-mono text-center font-medium mb-3 text-sm text-black">{post['title']['rendered']}</h4>
                                </div>
                            </Link>
                            );
                        })}
                        <Link href="/blog"><button className="px-7 py-3 w-full rounded-lg border-4 border-white bg-zinc-800">Read more</button></Link>
                    </div>
                    </div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const {id} = context.params;
    const res = await getSinglePost(id);

    // all post sidebar
    const all = await getSidebarPosts();
    const allPosts = all.filter((post) => post.slug !== id);

    return { props: { res, allPosts } };
}