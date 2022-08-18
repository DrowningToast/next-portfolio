import qs from "qs";

const initialBlogQuery = qs.stringify({
  sort: ["createdAt"],
  fields: ["title", "description", "slug"],
  populate: ["cover", "category"],
  pagination: {
    page: 1,
    pageSize: 1,
  },
});

const BlogQuery = qs.stringify({
  populate: ["cover", "category"],
});

export { initialBlogQuery, BlogQuery };
