const button = document.querySelector('#button');
const asset = document.querySelector('#asset');
const amount = document.querySelector('#amount');
const sectionAsset = document.querySelector('#section-asset');
const form = document.querySelector('#form');
const result = document.querySelector('#Result');
const networthButton = document.querySelector('#networthButton');
const TotalNetworth =document.querySelector('#TotalNetworth');
const pattern = /[0-9]/g ;







var assetSum = 0; 
button.addEventListener("click",($event)=>{
    if(asset.value == "" || amount.value == ""){
        result.classList.add('errorMessage');
        result.textContent ="Inputs cannot be null";
        return $event.preventDefault();
    }
    else if( amount.value.match(pattern) && amount.value > 0){
   $event.preventDefault();
   //creating Element
       const row = document.createElement('tr');
       const paragraph = document.createElement('td');
       const amountValue = document.createElement('td');
     //Calculating the total sum of asset  
assetSum += parseInt(amount.value);

       //Setting content
       paragraph.innerHTML =  asset.value;
       amountValue.innerHTML = amount.value;


       //append to parent
       row.appendChild(paragraph);
       row.appendChild(amountValue);
       sectionAsset.appendChild(row); 
     
       asset.focus();
       form.reset();
    }else{
        $event.preventDefault();
        result.classList.add('errorMessage');
        result.textContent ="Invalid Input";
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
var liabilitySum = 0;
LiabilityButton.addEventListener('click', ($event)=>{
    const LiabilityValue = Liability.value;
    const LiabilityAmountValue = LiabilityAmount.value;
    if(LiabilityValue =="" || LiabilityAmountValue ==""){
        result.classList.add('errorMessage');
        result.textContent ="Inputs cannot be null"
        $event.preventDefault();

    }else if(LiabilityAmount.value.match(pattern) && LiabilityAmount.value > 0){
        $event.preventDefault();
        //Creating Form element dynamically
        const Liabilityrow = document.createElement('tr');
        const LiabilityInput =  document.createElement('td');
        const LiabilityAmount =  document.createElement('td');
    //Calculating the total some of Liability
        liabilitySum += parseInt(LiabilityAmountValue);
       
        console.log(liabilitySum);

        LiabilityInput.textContent = LiabilityValue;
        LiabilityAmount.textContent = LiabilityAmountValue;

//Create Another Table 
        Liabilityrow.appendChild(LiabilityInput)
        Liabilityrow.appendChild(LiabilityAmount);
        //get a new table to append this to
        LiabilityTable.appendChild(Liabilityrow);
    
//reset form after a sucessful input
            form.reset();

    }  else{
        $event.preventDefault();
        result.classList.add('errorMessage');
        result.textContent ="Invalid Input";
        Liability.focus();
        form.reset();
    }



});

networthButton.addEventListener('click',($event)=>{

    networth = assetSum - liabilitySum;
    //console.log(networth);
    if(networth < 0 ){
        TotalNetworth.classList.add("errorMessage");
        TotalNetworth.textContent = networth;
    }
    else{
        TotalNetworth.textContent = networth;
    }

});












