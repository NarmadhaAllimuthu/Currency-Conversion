 function foo(){
    const getApi=fetch("https://v6.exchangerate-api.com/v6/1857298dfd1ec03d86310ce2/latest/USD"); //fetch datafrom api and it return as promise
    getApi.then((data)=>data.json()).then((data1)=> {                       //json-convert promise to redable stream
        let conversion=data1.conversion_rates;                              //get needed object
         let countryName=Object.keys(conversion);                           //get keys or countries seperately
         let cn1 = document.getElementsByClassName("countryName")[0].innerHTML="USD";  // Use [0] to get the first element of the input currency country
         // let cn2 = countryName.find((currency) => currency === cn1);         // find method return the 1st element that pass the condition
 
      //it enter into next if cn2 is valid 

         // if (countryName) {
             let ip = parseFloat(document.getElementsByClassName("input")[0].value); // Use parseFloat for input
             let en1 = document.getElementsByClassName("exchangeName")[0].value;     //get value of exchange currency country code

     //hasOwnProperty() -return boolean based on it as specific property or not

             if (conversion.hasOwnProperty(en1)) {

         //multiply input currency  with target country currency      
                 const convertedAmount = ip * conversion[en1];

                 document.getElementById("result").innerHTML=(`Converted amount: ${convertedAmount} ${en1}`);
             } else {
                document.getElementById("result").innerHTML="Enter valid exchange currency";
             }
         // } else {
         //    document.getElementById("result").innerHTML="Enter valid country name";
         // }
     }).catch((error) => {
        document.getElementById("result").innerHTML=("Error fetching exchange rate data:", error);
     }); 

     }
     let button=document.getElementsByTagName("button")[0];
     button.addEventListener("click",foo);














//          for(var j=0;j<countryName.length;j++){
//          let cn1=document.getElementsByClassName("countryName").value; //input store
//         let cn2=countryName[j];
//        if(cn1==cn2){
//         for(var i in conversion){
//             console.log(i,conversion[i])
//         }
//     }
//     }
//     });
//   let ip=parseInt(document.getElementsByClassName("input").value);
//   let en1=document.getElementsByClassName("exchangeName").value;   
//  }






























// var getApi = fetch("https://v6.exchangerate-api.com/v6/1857298dfd1ec03d86310ce2/latest/USD");
// getApi.then((data) => data.json()).then((data1) => {
   
//         var conversionRates = data1.conversion_rates;
//         var keys = Object.keys(conversionRates);

//         for (var i = 0; i < keys.length; i++) {
//             var currency = keys[i];
//             console.log(currency);
//         }
   
// });
// In this code, we first check if data1 and data1.conversion_rates exist to avoid potential errors. Then, we use Object.keys() to get the keys of the conversionRates object and iterate through them to access the currency codes and their corresponding conversion rates.

















