"use strict";
var up = 15; //Empty tile
var move = "stay";// direction squares can move
var tiles;//Array of tiles
var count=0;
var z=0;
var s;
var bool= false;//Checks if the tile is till moving


//Loads tiles when webpage loads and shuffles it
window.onload = function(){
    var box = document.getElementById('puzzlearea').getElementsByTagName('div');
   tiles=box;
     document.getElementById('shufflebutton').onclick = shuffle;
    
    for(var i=0; i<box.length;i++){
        box[i].className = 'puzzlepiece';
        box[i].onmouseover = Move;
        box[i].onmouseout = remove;
        box[i].onclick = movingTile;

        if(i>=0 && i<=3){
            box[i].style.left+=i*100+'px';
            box[i].style.top=0+'px';
            box[i].style.backgroundPosition = -i*100+'px '+'0px';
        }else if(i>=4 && i<=7){
            box[i].style.left+=(i-4)*100+'px';
            box[i].style.top=100+'px';
            box[i].style.backgroundPosition = -(i-4)*100+'px '+'-100px';
        }else if(i>=8 && i<=11){
            box[i].style.left+=(i-8)*100+'px';
            box[i].style.top=200+'px';
            box[i].style.backgroundPosition = -(i-8)*100+'px '+'-200px';
        }else{
            box[i].style.left+=(i-12)*100+'px';
            box[i].style.top=300+'px';
            box[i].style.backgroundPosition = -(i-12)*100+'px '+'-300px';
        }
        
    }
    shuffle();
};

//Checks if tile can move when it has been selected
function Move(){
    if(!bool){
        if((parseInt(this.style.left)+parseInt(this.offsetWidth)) === parseInt(getX()) && this.style.top===getY()){
        this.className = this.className + " movablepiece";
        move="Goright";
        }else if(parseInt(this.style.left) === (parseInt(getX())+parseInt(this.offsetWidth)) && this.style.top===getY()){
            this.className = this.className + " movablepiece";
            move= "Goleft";
        }else if((parseInt(this.style.top)+parseInt(this.offsetHeight)) === parseInt(getY()) && this.style.left===getX()){
            this.className = this.className + " movablepiece";
            move= "Godown";
        }else if(parseInt(this.style.top) === (parseInt(getY())+parseInt(this.offsetHeight)) && this.style.left===getX()){
            this.className = this.className + " movablepiece";
            move= "Goup";
        }else{
            move= "stay";
        }
    }
    

}

//remove .moveablepiece class when mouse is no longer over the tile
function remove(){
    this.className = 'puzzlepiece';
}

//Check method for shuffle method
function shuffleCheck(tile){
    if((parseInt(tile.style.left)+parseInt(tile.offsetWidth)) === parseInt(getX()) && tile.style.top===getY()){
        move="Goright";
        return "Goright";
    }else if(parseInt(tile.style.left) === (parseInt(getX())+parseInt(tile.offsetWidth)) && tile.style.top===getY()){
        move= "Goleft";
        return "Goleft";
    }else if((parseInt(tile.style.top)+parseInt(tile.offsetHeight)) === parseInt(getY()) && tile.style.left===getX()){
        move= "Godown";
        return "Godown";
    }else if(parseInt(tile.style.top) === (parseInt(getY())+parseInt(tile.offsetHeight)) && tile.style.left===getX()){
        move= "Goup";
        return "Goup";
    }else{
        move= "stay";
        return "stay";
    }

}

//Animates tile movement
function Movement(){
    var x = 0;
    for(var i=0; i<tiles.length;i++){
        if(tiles[i].textContent===s){
            x=i; 
        }
    }
    
    if(z!=100){
        if(move==="Goup" || move==="Godown"){
            tiles[x].style.top=parseInt(tiles[x].style.top)+count+'px';
        }else{
            tiles[x].style.left=parseInt(tiles[x].style.left)+count+'px';    
        }
        z+=1;
        bool=true;
        setTimeout(Movement, "1 * 1000");
    }else{
        z=0;
        bool=false;
        move="none";
    }   
    
}

//Gets direction and then calls Movement() to move the tile in the specific direction
/*function movingTile(){
    if(!bool){
                if(move == "Goright")
                {
                    count=1;
                    up-=1;
                    s=this.textContent;
                    Movement();
            
                }else if(move == "Goleft")
                {
       
                    count=-1;
                    up+=1;
                    s=this.textContent;
                    Movement();
             
                }
        
                else if(move == "Godown")
                {
                    count=1;
                    up-=4;
                    str=this.textContent;
                    Movement();
                    
                }
                else if(move == "Goup")
                {
           
                    count=-1;
                    up+=4;
                    s=this.textContent;
                    Movement();
            
                }
            }
    }

//Move method for shuffle
function shuffleMove(tile){
    
  if(move == "Goright"){
        
        tile.style.left=parseInt(tile.style.left)+100+'px';
        up-=1;
        break;
    }
        if(move == "Goleft")
        {
            tile.style.left=parseInt(tile.style.left)-100+'px';
            up+=1;
            break;
        }
    
        if(move == "Godown")
        {
            tile.style.top=parseInt(tile.style.top)+100+'px';
            up-=4;
            break;
        }
    
        if(move == "Goup")
        {
            tile.style.top=parseInt(tile.style.top)-100+'px';
            up+=4;
            break;
        }
}*/
//Gets direction and then calls Movement() to move tile to the given direction
function movingTile(){
    if(!bool){
        switch(move){
        case "Goright":
        count=1;
        up-=1;
        s=this.textContent;
        Movement();
        break;
        case "Goleft":
        count=-1;
        up+=1;
        s=this.textContent;
        Movement();
        break;
        case "Godown":
        count=1;
        up-=4;
        s=this.textContent;
        Movement();
        break;
        case "Goup":
        count=-1;
        up+=4;
        s=this.textContent;
        Movement();
        break;

    }
    }
}

//Move method for shuffle
function shuffleMove(elmt){
    
    switch(move){
        case "Goright":
        elmt.style.left=parseInt(elmt.style.left)+100+'px';
        up-=1;
        break;
        case "Goleft":
        elmt.style.left=parseInt(elmt.style.left)-100+'px';
        up+=1;
        break;
        case "Godown":
        elmt.style.top=parseInt(elmt.style.top)+100+'px';
        up-=4;
        break;
        case "Goup":
        elmt.style.top=parseInt(elmt.style.top)-100+'px';
        up+=4;
        break;

        default:


    }
}
        

       






//shuffles tiles
function shuffle(){

    var num=200;
    for(var i =0; i<num; i++){
        var listx = [];
        for(var i1 =0; i1<tiles.length; i1++){
            if(shuffleCheck(tiles[i1])!="stay"){
                listx.push(i1);
            }

        }
        if(listx.length!=0){
            var n = listx[Math.floor((Math.random()*listx.length)+0)];
            shuffleCheck(tiles[n]);
            shuffleMove(tiles[n]);
        }
    }
    move="stay";
}

//Returns the corresponding X for the empty tile
function getX(){
        if(up>=4 && up<=7){
            return (up-4)*100+'px';
        }else if(up>=8 && up<=11){
            return (up-8)*100+'px';
            
        }else if(up>=0 && up<=3){
            return up*100+'px';
            
        }else{
            return (up-12)*100+'px';
            
        }
        //return 0;
}


//Returns the corresponding Y for the empty tile
function getY(){
    if(up>=0 && up<=3){
            return '0px';
        }else if(up>=4 && up<=7){
            return '100px';
            
        }else if(up>=8 && up<=11){
            return '200px';
            
        }else{
            return '300px';
            
        }
}

 
