import {generateComment} from '../mock/comment';

export default class CommentModel {
  movie = Array.from({length: 3}, generateComment);

  getMovie = this.movie;
}
