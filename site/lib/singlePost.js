export default async function getSinglePost(id){
    try {
        const getProps = await fetch(
            `${process.env.BACKEND_URL}/wp/v2/posts?_embed&slug=${id}`
        );
        const data = await getProps.json();
        const title = data[0].title.rendered;
        const content = data[0].content.rendered;
        const excerpt = data[0].excerpt.rendered.replace(/<[^>]+>/g, '');
        const thumbnail = data[0]._embedded['wp:featuredmedia'][0].source_url;
        const permalink = `https://soumyamondal.com/blog/${data[0].slug}`
        const postDate = new Date(data[0].date).toLocaleDateString();
        return {title, content, excerpt, thumbnail, permalink, postDate}

      } catch (error) {
        // If an error occurs during the fetch request, handle it gracefully.
        // In this case, we'll just return a backup JSON object.
        console.error(error);
        const backupData = await fetch('https://soumyamondal.com/backup.json').then((res) => res.json());
        return backupData
      }
}