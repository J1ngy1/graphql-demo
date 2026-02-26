export const postResolvers = {
  Query: {
    posts: (_, __, { dataSources }) => {
      return dataSources.PostAPI.getPosts();
    },
    post: (parent, { id }, { dataSources }, info) => {
      // console.log(parent, args, contextValue, info);
      return dataSources.PostAPI.getPostById(id);
    },
  },
  Post: {
    comments: async (parent, _, { dataSources }) => {
      const comments = await dataSources.CommentAPI.getComments();
      return comments.filter((c) => c.postId === parent.id);
    },
  },
};
