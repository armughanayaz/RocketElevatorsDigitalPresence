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

let radioButtons = document.getElementById("radioButtons:checked");
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

numOfApartmentsInput.addEventListener("input" , () => {
    if (buildingType.value == "residential"){
        console.log("HEY WE MADE IT");
        calculateResi();
    } 
})

numOfBasementsInput.addEventListener("input" , () => {
    if (buildingType.value == "residential"){
        console.log("WE ARE ON OUR WAY");
        calculateResi();
    }else if (buildingType.value == "commercial"){
        calculateCommercial();
    }else if (buildingType.value == "corporate"|| "hybrid"){
        calculateCorHYbrid();
    }
})

numOfFloorsInput.addEventListener("input" , () => {
    if(buildingType.value == "residential"){
        console.log("WE ARE ALMOST THERE");
        calculateResi();
    }else if (buildingType.value == "commercial"){
        calculateCommercial();
    }
    else if (buildingType.value == "corporate" || "hybrid"){
        calculateCorHybrid();
    }
})

numOfCompaniesInput.addEventListener("input" , () => {
    if (buildingType.value == "commercial"){
        calculateCommercial();
    }
    else if (buildingType.value == "corporate" || "hybrid"){
        calculateCorHYbrid();
    }
})

numOfParkingInput.addEventListener("input" , () => {
   if (buildingType.value == "commercial"){
    calculateCommercial();
    }
    else if (buildingType.value == "corporate" || "hybrid"){
        calculateCorHybrid();
    }
})

numOfElevatorsInput.addEventListener("input" , () => {
    if (buildingType.value == "commercial"){
        calculateCommercial();
    }
})

maxOccupancyInput.addEventListener("input" , () =>{
    if (buildingType.value ==   "corporate" || "hybrid"){
        calculatecorHybrid();
    }
})

numOfCorporationsInput.addEventListener("input" , () =>{
    if (buildingType.value == "corporate" || "hybrid"){
        calculateCorHYbrid();
    }
})

businessHoursInput.addEventListener("input" , () =>{
    if (buildingType.value == "corporate" || "hybrid"){
        calculateCorHYbrid();
    }
})



                                        
    

        

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

let radioButton = document.querySelectorAll("input[name='productLine']");
radioButton.forEach(radioBtn => {
    radioBtn.addEventListener("change", productLineSelect);
});

function productLineSelect() {
    let identifier = document.querySelector('input[name="productLine"]:checked').value;
    console.log(identifier);
    let priceValue = userClick(identifier);
    console.log(priceValue);
    // calculateResi()
}

// var currentValue = 0;
function userClick(myRadio)  {
    // currentValue = myRadio.value;
    if (myRadio == 'standard'){
        return 7565; 
        // document.getElementById("elevatorsPricePerUnit").value = priceStandard; 
    } else if (myRadio == 'premium'){
       return 12345;
    //    document.getElementById("elevatorsPricePerUnit").value = priceStandard;
    }else if (myRadio == "excelium"){
        return 15400;
        // document.getElementById("elevatorsPricePerUnit").value = priceStandard
    }
}

radioButtons.addEventListener("click", (event) => {
    if (event.target.type == "standard"){
        document.getElementById('"elevatorsPricePerUnit"').value = "7565" + ' $ ';
    }
})

clickBtn.addEventListener("click", () => {
  elevatorsNeeded.value = numOfElevatorsInput.value;
})



function calculateResi(){
    console.log()
    let numElevators = 0;
let apartmentsNeeded = parseInt(numOfApartmentsInput.value);
let basementNeeded = parseInt(numOfBasements.value);
let floorsNeeded = parseInt(numOfFloors.value);
let avgPerFloor = apartmentsNeeded /  floorsNeeded;
let shaftNeeded = avgPerFloor / 6;
let additinalColumn = Math.floor((floorsNeeded/21))+1


corHybrid
function calculateNumOfElevatorCorporate(){
    let stories = parseFloat(numFloors.value)+parseFloat(numBasements.value);
    let numOccupants = (numOccupantsFloor.value)*(stories);
    let elevatorRequired = Math.ceil(numOccupants/1000);
    let columns = Math.ceil(stories/20)
    let elevatorPerColumns= Math.ceil(elevatorRequired/columns)
    let totalElevators = (elevatorPerColumns*columns)
    elevatorAmountInput.value= totalElevators 
    console.log(elevatorPerColumns)
    }






   /*  if (buildingType.value == "corporate" || buildingType.value == "hybrid"){
        let totalFloors = parseInt(numFloorsInput.value) + parseInt(numBasementsInput.value);
        let totalNumOccupants = totalFloors * maxOccupancyInput.value;
        let elevatorRequired = Math.ceil(totalNumOccupants / 1000);
        let elevatorColumns = Math.ceil(totalFloors / 20);
        let elevatorPerColumn = Math.ceil(elevatorRequired/elevatorColumns);
        let totalNumElevator = elevatorPerColumn * elevatorColumns;
        numElevators = totalNumElevator;
    }
    return numElevators; */
}
    
    
    //if (buildingType.value == 'residential') {
      //  let numOfApartPerFloor = parseInt(numOfApartmentsInput.value) / parseInt(numOfFloorsInput.value);
        //numOfApartments.value = numOfApartPerFloor;
    //}
//}

// function averageApartmentPerFloor(){
//     console.log("numberOfApartments / numberOfFloors");
// }

// // clickBtn.addEventListener('click', (event) => {
// //     addOnePlusOne();
// // // })
}