import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const self = new URL('/rss.xml', context.site).href;
  return rss({
    title: '杨坤的博客',
    description: '杨坤的随笔与文字。',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
    })),
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: `<language>zh-CN</language><atom:link href="${self}" rel="self" type="application/rss+xml"/>`,
  });
}
