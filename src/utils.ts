import { createClient } from "contentful";

export const client = createClient({
  space: "fznrkcuyei7u",
  accessToken: "htO6dggPU0E7pVobRtl2AJrRhDKqRcdlyeb9OkrvwJQ",
});

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "post",
    //TODO: order
  });

  return response.items;
};

export const getBlogPost = async (id: string) => {
  const response = await client.getEntry(id);
  return response;
};

export const getCategoryPosts = async (id: string) => {
  const res = await client.getEntries({
    content_type: "post",
    "fields.category.sys.id": id,
  });
  return res;
};
