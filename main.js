class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    } 
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut; 
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      let average = ratingsSum / this.ratings.length;
      return average;
    }
  
    addRating(inputRating) {
      (inputRating > 0 && inputRating <= 5) ? this.ratings.push(inputRating) : console.log('Rating has to be between 1 and 5');
    }
}
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }

    get movieCast() {
      return this._movieCast;
    }
  }

  class CD extends Media {
    constructor(artist, title, songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }

    get artist() {
      return this._artist;
    }

    get songs() {
      return this._songs;
    }

    shuffle() {
      return this._songs.sort(() => Math.random() - 0.5);
    }
  }
  
// Book  
const historyOfEverything = new Book('Bill Bryson', 'A Short Story of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
  
console.log(historyOfEverything.isCheckedOut);
  
// add ratings 
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
  
console.log(historyOfEverything.getAverageRating().toFixed(1));
  
// Movie  
const speed = new Movie('Jan de Bont', 'Speed', 116, ['Sandra Bullock', 'Keanu Reeves']);
speed.toggleCheckOutStatus();
  
console.log(speed.isCheckedOut);
  
// add ratings
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
  
console.log(speed.getAverageRating().toFixed(1));

// CD  
const speakNow = new CD('Taylor Swift', 'Speak Now', ['Dear John', 'Sparks Fly', 'Back To December', 'Lask Kiss', 'Enchanted']);
speakNow.toggleCheckOutStatus();

console.log(speakNow.isCheckedOut);

// add ratings
speakNow.addRating(5);
speakNow.addRating(5);
speakNow.addRating(5);

console.log(speakNow.getAverageRating().toFixed(1));
console.log(speakNow.shuffle());
