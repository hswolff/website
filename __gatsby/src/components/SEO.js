import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({
  title: titleProp,
  description: descriptionProp,
  postSlug,
  image: imageProp,
  isBlogPost,
}) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query LayoutData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          keywords
        }
      }
    }
  `);

  const title = titleProp || siteMetadata.title;
  const description = descriptionProp || siteMetadata.description;
  const image = imageProp || 'https://hswolff.com/images/profile-large.jpg';
  let url = siteMetadata.siteUrl;
  if (postSlug) {
    url += postSlug;
  }

  return (
    <Helmet titleTemplate={`%s | ${siteMetadata.title}`}>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="keywords" content={siteMetadata.keywords} />
      {/* The real MVP: https://moz.com/blog/meta-data-templates-123 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* <!-- Twitter Card data --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hswolff" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@hswolff" />
      <meta name="twitter:image" content={image} />
      {/* <!-- Open Graph data --> */}
      <meta property="og:title" content={title} />
      {isBlogPost && <meta property="og:type" content="article" />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteMetadata.title} />
    </Helmet>
  );
}
