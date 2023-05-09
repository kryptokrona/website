import { getDirectusClient } from "$lib/directus/client";
import { compile } from "mdsvex";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const directus = await getDirectusClient();
  try {
    const res = await directus.items(`posts`).readOne(params.post, {
      fields: ["*","comments.comment","comments.user_created.username", "comments.date_created"]
    });

    const compiledResponse = await compile(res.body);

    const mdx = compiledResponse?.code
      .replace(/>{@html `<code class="language-/g, "><code class=\"language-")
      .replace(/<\/code>`}<\/pre>/g, "</code></pre>");

    return { post: { content: mdx, extra: res } };
  } catch (err) {
    console.log(err);
    return {
      status: 404
    };
  }

};
/** @type {import("./$types").Actions} */
export const actions = {
  // @ts-ignore
  addLike: async ({request, locals}) => {
    console.log(locals);
    return await postReaction(request.url, 'like')
  },
  // @ts-ignore
	addLove: async ({request}) => {
    return await postReaction(request.url, 'love')
	},
  // @ts-ignore
	addRocket: async ({request}) => {
    return await postReaction(request.url, 'rocket')
	},
  // @ts-ignore
	addTada: async ({request}) => {
    return await postReaction(request.url, 'tada')
	},
  // @ts-ignore
  removeLike: async ({request}) => {
    return await postReaction(request.url, 'like')
  },
  // @ts-ignore
  removeLove: async ({request}) => {
    return await postReaction(request.url, 'love')
  },
  // @ts-ignore
  removeRocket: async ({request}) => {
    return await postReaction(request.url, 'rocket')
  },
  // @ts-ignore
  removeTada: async ({request}) => {
    return await postReaction(request.url, 'tada')
  }
};

const postReaction = async (url: string, reaction: string) => {
  const directus = await getDirectusClient();
  console.log(getPostSlug(url));
}

const getPostSlug = (url:string): string => {
  const postUrl = new URL(url)
  return postUrl.pathname.split('/')[2]
}


