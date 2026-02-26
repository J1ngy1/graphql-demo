import { postData } from "./mockData.js";

export class PostAPI {
  getPosts() {
    return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => data.posts);
  }

  getPostById(id) {
    return fetch(`https://dummyjson.com/posts/${id}`).then((res) => res.json());
  }
}
