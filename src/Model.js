export default class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
    this.Categories = ["Category 1", "Category 2", "Category 3", " Category 4", "Category 5"];
    this.QuestionId = 0;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }

  get CategoriesList() {
    return this.Categories;
  }

  set QuestionsList(value) {
    this.QuestionId = value;
  }

  get QuestionsList() {
    return this.QuestionId;
  }

  set QuestionsId(number) {
    this.QuestionId = number;
  }
}
