import { RESTDataSource } from "@apollo/datasource-rest";

export class CommentAPI extends RESTDataSource {
  baseURL = "https://dummyjson.com/";

  async getComments() {
    const response = await this.get("comments");
    return response.comments;
  }
}
