import { PostAPI } from "../../datasources/postAPI.js";

const postAPI = new PostAPI();

export const resolvers = {
  Query: {
    posts: () => {
      return postAPI.getPosts();
    },
    post: (_, { id }) => {
      return postAPI.getPostById(id);
    },
  },
};
