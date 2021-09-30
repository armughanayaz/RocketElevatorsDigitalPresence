let buildingType = document.getElementById("building-type");

let numOfApartments = document.getElementById("numOfApartments");
let numOfBasements = document.getElementById("numOfBasements");
let numOfFloors = document.getElementById("numOfFloors");
let numOfCompanies = document.getElementById("numOfCompanies");
let numOfParking = document.getElementById("numOfParking");
let numOfElevators = document.getElementById("numOfElevators");
let numOfCorporations = document.getElementById("numOfCorporations");
let maxOccupancy = document.getElementById("maxOccupancy");
let businessHours = document.getElementById("businessHours");

//use the number inside this. 
let numOfApartmentsInput = document.getElementById("numOfApartmentsInput");
let numOfBasementsInput = document.getElementById("numOfBasementsInput");
let numOfFloorsInput = document.getElementById("numOfFloorsInput");
let numOfCompaniesInput = document.getElementById("numOfCompaniesInput");
let numOfParkingInput = document.getElementById("numOfParkingInput");
let numOfElevatorsInput = document.getElementById("numOfElevatorsInput");
let numOfCorporationsInput = document.getElementById("numOfCorporationsInput");
let maxOccupancyInput = document.getElementById("maxOccupancyInput");
let businessHoursInput = document.getElementById("businessHoursInput");
//show the number here. 
let elevatorsNeeded = document.getElementById("elevatorsNeeded");
let elevatorsPricePerUnit = document.getElementById("elevatorsPricePerUnit");
let totalPriceOfTheElevators = document.getElementById("totalPriceOfTheElevators");
let intsallationCost = document.getElementById("intsallationCost");
let totalProjectCost = document.getElementById("totalProjectCost");

let radioButtons = document.getElementById("radioButtons");

let clickBtn = document.getElementById("clickBtn");

numOfApartments.style.display = "none";
numOfBasements.style.display = "none";
numOfFloors.style.display = "none";
numOfCompanies.style.display = "none";
numOfParking.style.display = "none";
numOfElevators.style.display = "none";
numOfCorporations.style.display = "none";
maxOccupancy.style.display = "none";
businessHours.style.display = "none";

function getSelectedValue(){
    let SelectedValue = buildingType.value;
    console.log(SelectedValue);
    if (SelectedValue == "select") {
        numOfApartments.style.display = "none";
        numOfFloors.style.display = "none";
        numOfBasements.style.display = "none";
        numOfCompanies.style.display = "none";
        numOfParking.style.display = "none";
        numOfElevators.style.display = "none";
        numOfCorporations.style.display = "none";
        maxOccupancy.style.display = "none";
        businessHours.style.display = "none";
    }

    else if (SelectedValue == "residential") {
        numOfApartments.style.display = "block";
        numOfFloors.style.display = "block";
        numOfBasements.style.display = "block";
        numOfCompanies.style.display = "none";
        numOfParking.style.display = "none";
        numOfElevators.style.display = "none";
        numOfCorporations.style.display = "none";
        maxOccupancy.style.display = "none";
        businessHours.style.display = "none";
    }
    else if (SelectedValue == "commercial") {
        numOfFloors.style.display = "block";
        numOfBasements.style.display = "block";
        numOfCompanies.style.display = "block";
        numOfParking.style.display = "block";
        numOfElevators.style.display = "block";
        numOfCorporations.style.display = "none";
        maxOccupancy.style.display = "none";
        businessHours.style.display = "none";
        numOfApartments.style.display = "none";
    }
    else if (SelectedValue == "corporate") {
        numOfFloors.style.display = "block";
        numOfBasements.style.display = "block";
        numOfParking.style.display = "block";
        numOfCorporations.style.display = "block";
        maxOccupancy.style.display = "block";
        numOfCompanies.style.display = "none";
        numOfElevators.style.display = "none";
        businessHours.style.display = "none";
        numOfApartments.style.display = "none";
    }
    else if (SelectedValue = "hybrid") {
        numOfFloors.style.display = "block";
        numOfBasements.style.display = "block";
        numOfCompanies.style.display = "block";
        numOfParking.style.display = "block";
        maxOccupancy.style.display = "block";
        businessHours.style.display = "block";
        numOfCorporations.style.display = "none";
        numOfElevators.style.display = "none";
        numOfApartments.style.display = "none";
    }
}


radioButtons.addEventListener("click", (event) => {
    if (event.target.type == "radio"){
        
    }
})

clickBtn.addEventListener("click", () => {
  elevatorsNeeded.value = numOfElevatorsInput.value;
})

function calculate(){
    let numElevators = 0;
    (buildingType.value == commercial);{
        return parseInt(numOfElevatorsInput.value);
    }
}

// function averageApartmentPerFloor(){
//     console.log("numberOfApartments / numberOfFloors");
// }

// // clickBtn.addEventListener('click', (event) => {
// //     addOnePlusOne();
// // // })