export const commentResolvers = {
  Query: {
    comments: (_, __, { dataSources }) => {
      return dataSources.CommentAPI.getComments();
    },
    comment: (parent, { id }, { dataSources }, info) => {
      // console.log(parent, args, contextValue, info);
      return dataSources.CommentAPI.getCommentById(id);
    },
  },
};

// resolver chain
// query GetComments {
//   comments {
//     id
//     user {
//        id
//      }
//   }
// }

// Query.comments() -> Comment.id ->
//                  -> Comment.user() -> User.id
