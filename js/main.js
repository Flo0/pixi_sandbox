let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}

let
  Application = PIXI.Application,
  loader = PIXI.Loader.shared,
  resources = loader.resources,
  Sprite = PIXI.Sprite;

PIXI.utils.sayHello(type)
console.log(type)

let options = {
  width: 512,         // default: 800
  height: 512,        // default: 600
  antialias: true,    // default: false
  transparent: true, // default: false
  resolution: 2       // default: 1
}

function tickerLoop(delta) {
  currentGameLoop(delta)
}

let currentGameLoop = setupGameLoop
let application = new Application(options)
document.getElementById("display").appendChild(application.view)
application.ticker.add(tickerLoop);

loader
  .add("bird", "public/images/bird.png")
  .add("id", "public/images/id.png")
  .add("dice", "public/images/dice.png")
  .add("icon", "public/images/icon.png")
  .add("grass_atlas", "public/atlas/grass_atlas.json")
  .on("progress", loadProgressHandler)
  .load(setup)

function loadProgressHandler(loader, resource) {
  console.log("loading " + resource.name + " [" + loader.progress + "%]")
}

function setupGameLoop(delta) {

}

function setup() {
  /*
  let sprites = []

  let bird = new Sprite(resources.bird.texture)
  let id = new Sprite(resources.id.texture)
  let dice = new Sprite(resources.dice.texture)
  let icon = new Sprite(resources.icon.texture)

  bird.position.set(128, 128)
  id.position.set(256 + 128, 128)
  dice.position.set(256 + 128, 256 + 128)
  icon.position.set(128, 256 + 128)

  //bird.visible = false

  sprites[0] = bird
  sprites[1] = id
  sprites[2] = dice
  sprites[3] = icon

  sprites.forEach((element) => {
    element.anchor.set(0.5, 0.5)
    element.scale.x = 0.5
    element.scale.y = 0.5
  })
  */

  let grassSprites = []
  let grassTextures = resources["grass_atlas"].textures;

  for (let x = 0; x < 32; x++) {
    for (let y = 0; y < 32; y++) {
      let sprite = new Sprite(grassTextures["grass_" + Math.floor(1 + (Math.random() * 8)) + ".png"])
      sprite.position.set(x * 16, y * 16)
      application.stage.addChild(sprite)
    }
  }

  currentGameLoop = primaryGameLoop;
}

function primaryGameLoop(delta) {

}

