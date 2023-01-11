const ageOne =document.getElementById("ageOne");
const ageTwo =document.getElementById("ageTwo");

//output

const result = document.getElementById("result");

function math(){
    const userInputOne = ageOne.value;
    const userInputTwo = ageTwo.value;

    const userDifference = userInputOne - userInputTwo;

    result.innerHTML = userDifference;

}

