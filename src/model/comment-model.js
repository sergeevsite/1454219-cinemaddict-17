import {generateComment} from '../mock/comment';

export default class CommentModel {
  #comments = Array.from({length: 3}, generateComment);

  get comments() {
    return this.#comments;
  }
}
