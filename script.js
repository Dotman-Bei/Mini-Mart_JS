var allCart=[];

function addCart(){
    var item = document.getElementById("cart").value;
    if(item ==""){
        showErr.innerHTML = `I am not filled`;
    }else{
         allCart.push(item);
        showErr.innerHTML="";
        cart.value = "";
        loop();
    }
   
}
function loop(){
    disp.innerHTML="";
    for(i=0; i<allCart.length; i++){
        disp.innerHTML +=`<h3>${i+1} .&nbsp ${allCart[i]}</h3>`;
    }
}
function addStart(){
    var item = document.getElementById("cart").value;
    if(item ==""){
        showErr.innerHTML = `i am not filled`;
    }else{
         allCart.unshift(item);
        showErr.innerHTML="";
        cart.value = "";
        loop();
    }
   
}
function deleteFirst(){

         allCart.shift();
        cart.value = "";
        loop();
    }

function editAny(){
    var userInput = Number(prompt("Enter a number you want to delete"));
    var userEdit = prompt("What do you want to edit") ;
    allCart[userInput -1] = userEdit;
    loop();
} 

function deleteAny(){
    var userInput= Number(prompt("Enter a number you want to delete"));
    allCart.splice(userInput -1,1);
    loop();
}

function deleteLast(){
    allCart.pop();
    loop();
}

function deleteAll(){
    allCart.splice(0);
    loop();
}

   
