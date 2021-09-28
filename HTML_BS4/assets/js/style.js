document.getElementById("numOfApartments").style.display = "none";
document.getElementById("numOfBasements").style.display = "none";
document.getElementById("numOfFloors").style.display = "none";
document.getElementById("numOfCompanies").style.display = "none";
document.getElementById("numOfParking").style.display = "none";
document.getElementById("numOfElevators").style.display = "none";
document.getElementById("numOfCorporations").style.display = "none";
document.getElementById("maxOccupancy").style.display = "none";
document.getElementById("businessHours").style.display = "none";

function getSelectedValue(){
    let SelectedValue=document.getElementById("building-type").value;
    console.log(SelectedValue);
    if (SelectedValue == "residential") {
        document.getElementById("numOfApartments").style.display = "block";
        document.getElementById("numOfFloors").style.display = "block";
        document.getElementById("numOfBasements").style.display = "block";
        document.getElementById("numOfCompanies").style.display = "none";
        document.getElementById("numOfParking").style.display = "none";
        document.getElementById("numOfElevators").style.display = "none";
        document.getElementById("numOfCorporations").style.display = "none";
        document.getElementById("maxOccupancy").style.display = "none";
        document.getElementById("businessHours").style.display = "none";
    }
    else if (SelectedValue == "commercial") {
        document.getElementById("numOfFloors").style.display = "block";
        document.getElementById("numOfBasements").style.display = "block";
        document.getElementById("numOfCompanies").style.display = "block";
        document.getElementById("numOfParking").style.display = "block";
        document.getElementById("numOfElevators").style.display = "block";
        document.getElementById("numOfCorporations").style.display = "none";
        document.getElementById("maxOccupancy").style.display = "none";
        document.getElementById("businessHours").style.display = "none";
        document.getElementById("numOfApartments").style.display = "none";
    }
    else if (SelectedValue == "corporate") {
        document.getElementById("numOfFloors").style.display = "block";
        document.getElementById("numOfBasements").style.display = "block";
        document.getElementById("numOfParking").style.display = "block";
        document.getElementById("numOfCorporations").style.display = "block";
        document.getElementById("maxOccupancy").style.display = "block";
        document.getElementById("numOfCompanies").style.display = "none";
        document.getElementById("numOfElevators").style.display = "none";
        document.getElementById("businessHours").style.display = "none";
        document.getElementById("numOfApartments").style.display = "none";
    }
    else if (SelectedValue = "hybrid") {
        document.getElementById("numOfFloors").style.display = "block";
        document.getElementById("numOfBasements").style.display = "block";
        document.getElementById("numOfCompanies").style.display = "block";
        document.getElementById("numOfParking").style.display = "block";
        document.getElementById("maxOccupancy").style.display = "block";
        document.getElementById("businessHours").style.display = "block";
        document.getElementById("numOfCorporations").style.display = "none";
        document.getElementById("numOfElevators").style.display = "none";
        document.getElementById("numOfApartments").style.display = "none";
    }
}

