class Form {
  constructor() {
    this.input = createInput("Enter the name");
    this.playButton = createButton("Play");
    this.titleImage = createImg("assets/title.png");
    this.greeting = createElement("h2")
  }

  setElementsPosition(){
    this.input.position(width/2 - 80, height/2 - 60);
    this.playButton.position(width/2 - 40, height/2 + 10);
    this.titleImage.position(100, 100);
    this.greeting.position(width/2 - 150, height/2 - 60)
  }

  display(){
    this.setElementsPosition()
  }
}
