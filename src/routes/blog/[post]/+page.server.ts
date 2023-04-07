
import {compile} from "mdsvex";
import {getDirectusClient} from "../../../lib/utils/directus";

export async function load({params}) {
    const directus = await getDirectusClient();

    try {
        const res = await directus.items(`posts`).readOne(params.post, {
            fields: ['*'],
        })

        const compiledResponse = await compile(res.body)
        const mdx = compiledResponse.code
            .replace(/>{@html `<code class="language-/g, '><code class="language-')
            .replace(/<\/code>`}<\/pre>/g, '</code></pre>')

        return { content: mdx, extra: res };
    } catch (err) {
        console.log(err)
        return {
            status: 404
        };
    }

}