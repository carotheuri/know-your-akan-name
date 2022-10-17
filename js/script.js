const femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const testdays = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
const maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var gender;
function calculateDayofWeek(year,month,day){
    year = year.toString();
    var century = year.substring(0,2);
    century = parseInt(century);
    //year = year.toString();
    var yearlen = year.length;
    var yy = year.substring(yearlen-2,yearlen);
    console.log(yy);
    yy = parseInt(yy);
    var dayOfWeek =  Math.floor((((century/4) -2*century-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day) % 7);
    console.log(dayOfWeek);
    assignUserakanname(dayOfWeek);
}
function validateUserDetails(){
    
    confirm("Are you sure");
    var day = parseInt(document.getElementById("dayborn").value);
    var month = parseInt(document.getElementById("monthborn").value);
    var year = parseInt(document.getElementById("yearborn").value);
   
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
        calculateDayofWeek(year,month,day);
    }
}
function assignUserakanname(calculatedday){
    if(gender == "female"){
        switch(calculatedday){
            case 0:
                alert("Your Akan name is " + femaleAkanNames[0]);
            break;
            case 1:
                alert("Your Akan name is " + femaleAkanNames[1]);
            break;
            case 2:
                alert("Your Akan name is " + femaleAkanNames[2]);
            break;
            case 3:
                alert("Your Akan name is " + femaleAkanNames[3]);
            break;
            case 4:
                alert("Your Akan name is " + femaleAkanNames[4]);
            break;
            case 5:
                alert("Your Akan name is " + femaleAkanNames[5]);
            break;
            case 6:
                alert("Your Akan name is " + femaleAkanNames[6]);
            break;
            default:
                alert("we could not find your name");
        }
    }    
    else{
        switch(calculatedday){
            case 0:
                alert("Your Akan name is " +  maleAkanNames[0]);
            break;
            case 1:
                alert("Your Akan name is " + maleAkanNames[1]);
            break;
            case 2:
                alert("Your Akan name is " + maleAkanNames[2]);
            break;
            case 3:
                alert("Your Akan name is " + maleAkanNames[3]);
            break;
            case 4:
                alert("Your Akan name is " + maleAkanNames[4]);
            break;
            case 5:
                alert("Your Akan name is " + maleAkanNames[5]);
            break;
            case 6:
                alert("Your Akan name is " + maleAkanNames[6]);
            break;
            default:
                alert("we could not find your name");
        }
    }
}
function main(){
    validateUserDetails();
}