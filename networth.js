const button = document.querySelector('#button');
const asset = document.querySelector('#asset');
const amount = document.querySelector('#amount');
const sectionAsset = document.querySelector('#section-asset');
const form = document.querySelector('#form');
const result = document.querySelector('#Result');



button.addEventListener("click",($event)=>{
    if(asset.value == "" || amount.value == ""){
        result.textContent ="Inputs cannot be null";
        return $event.preventDefault();
    }
    else{
   $event.preventDefault();
   //creating Element
       const row =document.createElement('tr');
       const paragraph = document.createElement('td');
       const amountValue = document.createElement('td');
       

       //Setting content
       paragraph.innerHTML =  asset.value;
       amountValue.innerHTML = amount.value;


       //append to parent
       row.appendChild(paragraph);
       row.appendChild(amountValue);
       sectionAsset.appendChild(row); 
     
       asset.focus();
     form.reset();
    }
});


/*

button.addEventListener('click', ($event)=>{
alert('Hello world!');
});*/


// <label for="text">Asset/Liabilty:</label>
// <label for="text">Amount:</label>















/*button.addEventListener('click', ($event)=>{
  
    //alert('Hello world!');

});*/



