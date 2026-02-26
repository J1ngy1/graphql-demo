export class CommentAPI {
  getComments() {
    return fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => data.comments);
  }

  getCommentById(id) {
    return fetch(`https://dummyjson.com/comment/${id}`).then((res) =>
      res.json(),
    );
  }
}
