import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://catstronauts-api.up.railway.app/";
  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }
  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }
}
