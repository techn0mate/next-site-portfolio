export default async function getSidebarPosts(){
    try {
        const getProps = await fetch(`${process.env.BACKEND_URL}/wp/v2/posts?_embed&per_page=5`);
        const data = await getProps.json();
        return data
      } catch (error) {
        // If an error occurs during the fetch request, handle it gracefully.
        // In this case, we'll just return a backup JSON object.
        console.error(error);
        const backupData = await fetch('https://typefinance.com/backup.json').then((res) => res.json());
        return backupData
      }
}