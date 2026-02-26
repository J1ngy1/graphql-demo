import { postData } from "./mockData.js";

export class PostAPI {
  getPosts() {
    return postData;
  }

  getPostById(id) {
    return postData.find((p) => p.id == id);
  }
}
