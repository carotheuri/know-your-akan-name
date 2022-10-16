const femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
// const makeAkanNames = [];
function calculateDayofWeek(){
    
    console.log("happy");
   
    validateUserDetails()
    //var dayOfWeek = 
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