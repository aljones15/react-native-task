export class Session {
  constructor(username, password){
    this.username = username || null;
    this.password = password || null;
  }
  logged_in() { return this.username && this.password }
}

export class Card {
  constructor(card){
    Object.assign(this, card);
    this.yes = null;
    this.no = null;
  }
}


