import { getPostBySlug } from '@/libs/markdown';
import markdownToHtml from '@/libs/markdownToHtml';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ['title', 'author', 'description', 'content']);
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    const descriptionText =
      post.description ||
      (typeof post.content === 'string'
        ? post.content.replace(/\s+/g, ' ').trim().slice(0, 136)
        : '');

    return {
      title: `${post.title || 'Single Post Page'} | ${siteName}`,
      description: descriptionText ? `${descriptionText.slice(0, 136)}${descriptionText.length > 136 ? '...' : ''}` : 'Documentation article',
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
    };
  }
}

export default async function Post(props: Props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ['title', 'author', 'content']);
  const content = await markdownToHtml(post.content || '');

  return <article dangerouslySetInnerHTML={{ __html: content }}></article>;
}
