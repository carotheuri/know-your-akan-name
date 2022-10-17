const femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const form  = document.getElementById('my_form');
const maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var gender = '';
if(document.getElementById("female").checked = true){
    gender = "female";
}
else{
    gender = "male";
}

// function calculateDayofWeek(year,month,day){
//     year = year.toString();
//     var century = year.substring(0,2);
//     century = parseInt(century);
//     //year = year.toString();
//     var yearlen = year.length;
//     var yy = year.substring(yearlen-2,yearlen);
//     console.log(yy);
//     yy = parseInt(yy);
//     var dayOfWeek =  Math.floor((((century/4) -2*century-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day) % 7);
//     console.log(dayOfWeek);
//     assignUserakanname(dayOfWeek);
// }
function calculateDayofWeekAlternative(year,month,day){
    //"october 17, 2022 01:15:00"

    var userDate = new Date(month+" "+day+" "+year);
    var dayOfWeek = userDate.getDay();
    assignUserakanname(dayOfWeek); assignUserakanname(0);

}
function validateUserDetails(){
    
    confirm("Are you sure");
    var day = document.getElementById("dayborn").value;
    var month = document.getElementById("monthborn").value;
    var year = document.getElementById("yearborn").value;
    
    if(day  == " " || month == "" || year == ""){
        alert("Kindly provide all details,some are missing");
    }
    else if(day <= 0 || day >31 ||  month <=0 || month>12 || year.length < 4){
        alert("Kindly provide valid details as suggested on the placeholders");
    }
    else {
        day = parseInt(day);
        month = parseInt(month);
        year = parseInt(year);
        calculateDayofWeekAlternative(year,month,day);
    }
}
function assignUserakanname(calculatedday){
    var txtfield = document.getElementById("displaymsg");
    if(gender == "female"){
        switch(calculatedday){
            case 0:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[0];
            break;
            case 1:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[1];
            break;
            case 2:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[2];
            break;
            case 3:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[3];
            break;
            case 4:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[4];
            break;
            case 5:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[5];
            break;
            case 6:
                txtfield.innerText = "Your Akan name is " + femaleAkanNames[6];
        }
        form.reset();
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
        }
    }
    return;
}
function main(){
    validateUserDetails();
}