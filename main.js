canvas =document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

car1_width=150;
car1_height=100;
car1_x=10;
car1_y=10;

car2_width=150;
car2_height=100;
car2_x=10;
car2_y=120;

background_image="data:image/jpeg;base64,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"

car1_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbsNbJeahU506DbH2B8jlQNaU6gtBKY1AeA&usqp=CAU"

car2_image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUffTYefvpk-E1M_eGN2ISkZjGqYIAacrH4wjDRnKA_cZkn3DrxC53A4gnxrpb8JSpkb4&usqp=CAU"

function add(){
    bg= new Image();
    bg.onload= upload_background;
    bg.src= background_image;
    
    car1= new Image();
    car1.onload= upload_car1;
    car1.src= car1_image;

    car2= new Image();
    car2.onload= upload_car2;
    car2.src= car2_image;
     }

     function upload_background(){
        ctx.drawImage(bg,0,0,canvas.width,canvas.height);
        }
        
        function upload_car1(){
        ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height);
         }

 function upload_car2(){
 ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);
 }
 window.addEventListener("keydown",my_keydown)
             function my_keydown(e){
            
             keypressed=e.keyCode;
             console.log(keypressed);
            
             if(keypressed=='38'){
                up();
            console.log("up");
             }
            
             if(keypressed=='40'){
                down();
            console.log("down");
             }
            
             if(keypressed=='37'){
                left();
            console.log("left");
             }
            
             if(keypressed=='39'){
               right();
            console.log("right");
             }
            }
            function up(){
                if(car1_y>=0){
               car1_y=car1_y-10
                upload_background();
                upload_car1();
                }
                
                }
            
             function down(){
                 if(car1_y<=500){
                 car1_y=car1_y+10
                 upload_background();
                 upload_car1();
                    }
                    
                    }
function left(){
   if(car1_x>=0){
   car1_x=car1_x-10
  upload_background();
   upload_car1();
    }
   }
            
   function right(){
   if(car1<=700){
    car1_x=car1_x+10
    upload_background();
     upload_car1();
    }
   }
 function up(){
if(car2_y>=0){
   car2_y=car2_y-10
upload_background();
 upload_car2();
 }
  }
 function down(){
    if(car2_y<=500){
  car2_y=car2_y+10
 upload_background();
upload_car2();
  }
 }
function left(){
 if(car2_x>=0){
  car2_x=car2_x-10
   upload_background();
 upload_car2();
  }
  }
                            
  function right(){
  if(car2<=700){
    car2_x=car2_x+10
  upload_background();
 upload_car2();
 
 
}
if(car1_x >700){
console.log("car1 Won");
document.getElementById("game_status").innerHTML= "CAR 1 WON!!";
}

if(car2_x >700){
   console.log("car2 Won");
   document.getElementById("game_status").innerHTML= "CAR 2 WON!!";
   }
}