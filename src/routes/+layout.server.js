import { getDirectusClient } from '../lib/utils/directus';
export async function load() {
    const directus = await getDirectusClient()
    try {
        const data = await directus.items('posts').readByQuery({
            fields: ['*'],
            sort: '-date_created',
            filter: {status: 'published'},
        })

        return { posts: data }

    } catch (e) {
        console.log(e)
    }
}