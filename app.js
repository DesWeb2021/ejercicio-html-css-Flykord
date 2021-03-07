function cimage(){ 

 let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  if(  img1.style.display == "none"){
    img1.style.display = "contents";
   img2.style.display = "none";

  }else{
    img2.style.display = "contents";
    img1.style.display = "none";
  }



}