import { GraphQLClient, gql } from 'graphql-request';

export default async function getGqlSingle(slug) {
    const graphCms = new GraphQLClient(
        'https://ap-south-1.cdn.hygraph.com/content/clfl2qhu008f801uh5knw6eld/master' // https://api-eu-central-1.graphcms.com/v2/ckh7q7q0q0q0j01x2q2q2q2q2/master'
    )
    const QUERY = gql`
    {
        post(where: {slug: ${slug}}) {
            title
            updatedAt
            coverImage {
                url
            }
            content {
                html
            }
        }
    }
    `
    const data = await graphCms.request(QUERY)
    return data.post
}

