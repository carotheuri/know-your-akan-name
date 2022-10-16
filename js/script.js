const femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
// const makeAkanNames = [];
function calculateDayofWeek(day,month,year){
    
    console.log("happy");
    var century = year.toString();
    century = century.substring(0,2);
    console.log(century);
    var dayOfWeek =  Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

}
function validateUserDetails(){
    confirm("Are you sure");
    var day = document.getElementById("dayborn").value;
    var month = document.getElementById("monthborn").value;
    var year = document.getElementById("yearborn").value;
    var gender = null;
    if(document.getElementById("female").checked = true){
        gender = "female";
    }
    else{
        gender = "male";
    }
    if(day  == "" || month == "" || year == "" ){
        alert("Kindly provide all details,some are missing");
    }
    else if(day <= 0 || day >31 &&  month <=0 || month>12 ){
        alert("Kindly provide valid details as suggested on the placeholders");
    }
    else {
        calculateDayofWeek(day,month,year);
    }
}