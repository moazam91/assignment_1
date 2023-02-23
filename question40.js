//Q. No.40: Answer
function describe_city(city_name,country_name = "Pakistan"){
    return city_name + ", " + country_name;
}

console.log(describe_city("Islamabad"));
console.log(describe_city("New York","USA"));
console.log(describe_city("London","UK"));
