const button = document.querySelector('#button');
const asset = document.querySelector('#asset');
const amount = document.querySelector('#amount');
const sectionAsset = document.querySelector('#section-asset');
const form = document.querySelector('#form');
const result = document.querySelector('#Result');


button.addEventListener("click",($event)=>{
    if(asset.value == "" || amount.value == ""){
        result.classList.add('errorMessage');
        result.textContent ="Inputs cannot be null";
        return $event.preventDefault();
    }
    else{
   $event.preventDefault();
   //creating Element
       const row = document.createElement('tr');
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


//Liability Section

// Getting Elements

const Liability = document.querySelector('#Liability');
const LiabilityAmount = document.querySelector('#Liability-amount');
const LiabilityButton= document.querySelector('#Liability-button');
const Liabilityrow =document.querySelector('#Liability-row');
const LiabilityTable =document.querySelector('#liability-table');

//Creating the Logic
LiabilityButton.addEventListener('click', ($event)=>{
    const LiabilityValue = Liability.value;
    const LiabilityAmountValue =LiabilityAmount.value;
    if(LiabilityValue =="" || LiabilityAmountValue ==""){
        result.classList.add('errorMessage');
        result.textContent ="inputs cannot be null"
        $event.preventDefault();
    }else{
        $event.preventDefault();
        const Liabilityrow = document.createElement('tr');
        const LiabilityInput =  document.createElement('td');
        const LiabilityAmount =  document.createElement('td');

        LiabilityInput.textContent = LiabilityValue;
        LiabilityAmount.textContent = LiabilityAmountValue;

//Create Another Table to avoid this stree
        Liabilityrow.appendChild(LiabilityInput)
        Liabilityrow.appendChild(LiabilityAmount);
        //get a new table to append this to
        LiabilityTable.appendChild(Liabilityrow);

     

    }  



});












/*button.addEventListener('click', ($event)=>{
  
    //alert('Hello world!');

});*/



