const femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var day = document.getElementById("dayborn").value;
var month = document.getElementById("monthborn").value;
var year = document.getElementById("yearborn").value;
var gender = null;
// const makeAkanNames = [];
function calculateDayofWeek(){
    
    console.log("happy");
    var century = year.toString();
    century = century.substring(0,2);
    console.log(century);
    var dayOfWeek =  Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
    assignUserakanname(dayOfWeek);
}
function validateUserDetails(){
    confirm("Are you sure");

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
        calculateDayofWeek();
    }
}
function assignUserakanname(calculatedday){
    if(gender == "female"){
        switch(calculatedday){
            case 0:
                alert(femaleAkanNames[0]);
            break;
            case 1:
                alert(femaleAkanNames[1]);
            break;
            case 2:
                alert(femaleAkanNames[2]);
            break;
            case 3:
                alert(femaleAkanNames[3]);
            break;
            case 4:
                alert(femaleAkanNames[4]);
            break;
            case 5:
                alert(femaleAkanNames[5]);
            break;
            case 6:
                alert(femaleAkanNames[6]);
            break;
        }
    }
    
    
    
}
function main(){
    validateUserDetails();
}