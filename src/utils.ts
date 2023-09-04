import { createClient } from 'contentful';

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE_ID!,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
// });
const client = createClient({
  space: "fznrkcuyei7u",
  accessToken: "htO6dggPU0E7pVobRtl2AJrRhDKqRcdlyeb9OkrvwJQ"
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'post',
  });

  return response.items;
};

export default getBlogPosts;