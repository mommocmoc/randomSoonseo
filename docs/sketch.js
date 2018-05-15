var s ;
var shapeColor ;
var preS = 0 ;
var curS ;
var group = ['알러지','피로도최고조','이러지말아조','구조조정','함께하조','LUV.I','ㅌㄷㅌㄷ','내 일상을 돌려조','멸치','배지영조','혜밀리','JEK','예쓰조','로맨스가 필요해','힉힉'];
var resultGroup =[];
var trigger = true;
function setup() {
	createCanvas(windowWidth, windowHeight);
	print(group);
	resultGroup = Shuffle(group);
	print(resultGroup);

}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function draw() {

	// for(var i = 0; i<group.length ; i++ ){
	// 	textSize(20);
	// 	textAlign(LEFT);
	// 	text(i+1+'. '+resultGroup[i],30+20*i,30+20*i);
	// }



	//background(0,126,255);
	// s=50+second()*10;
  // curS = millis();
	// noStroke();
  // fill(shapeColor)
	// ellipse(windowWidth/2,windowHeight/2,15+s,15+s);
  // if(curS-preS > 1000){
  //   preS = curS ;
  //   colorChange();
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
	if(trigger){
	resultGroup = Shuffle(resultGroup);
	background(255);
	trigger = false;
	for(var i = 0; i<group.length ; i++ ){
		textSize(20);
		textAlign(LEFT);
		text(i+1+'. '+resultGroup[i],50+20*i,30+20*i);
	}
}
}
