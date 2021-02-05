var dog,happyDog,database,foodS,foodStock;

function preload()
{
  var happyDog = loadImage ("images/dogImg1.png")
  var Dog = loadImage ("images/dogImg.png")
}

function setup() {
  createCanvas(500,500);
  dog.addImage ("images/dogImg.png")
  foodStock = database.ref ('food');
  foodStock.on ("value",readStock);  
}


function draw() {  
  background (46, 139, 87);
  drawSprites();
  
  if (keyWentDown(UP_ARROW)){
    writeStock (foodS);
    dog.addImage(happyDog);
  }
}

//Funtion to read value from DB
function readStock(data){
    foodS=data.val();
}

//Funtion to write values in DB
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
