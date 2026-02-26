import { CommentAPI } from "../../datasources/commentAPI.js";

const commentAPI = new CommentAPI();

export const commentResolvers = {
  Query: {
    comments: async () => {
      return commentAPI.getComments();
    },
  },
};
