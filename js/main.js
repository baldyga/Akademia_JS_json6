let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};
console.log(jsonPracownicy.pracownicy);

jsonPracownicy.pracownicy.forEach(function(name,index) {
    console.log(name.firstName[0]);
    console.log("Indeks: " + index, "Imię i nazwisko:  " + name.firstName, name.lastName);
});