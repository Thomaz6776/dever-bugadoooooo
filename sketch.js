const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var FundoIMG, Fundo;
var base, arma;

function preload() {
  FundoIMG = loadImage("./Assets/ImagemFundo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  base = new basePlayer(150, height/2 + 50, 100, 200);
  arma = new ArmPlayer(120, 55, 50, 100);



}


function draw() 
{
  background(FundoIMG);
  Engine.update(engine);

  base.display();
  arma.display();

  
}

