
console.log("Hello from JS");

var users = [
    {
        name: "John Doe",
        gender: "Male ♂️",
        country: "USA",
        age: 30,
        img: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female ♀️",
        country: "Canada",
        age: 25,
        img: "jane.png"
    },
    {
        name: "Kota Akhilesh",
        gender: "Male ♂️",
        country: "India",
        age: 18,
        img: "akhil.jpeg"
    }
];

var id = 0;

function toggle() {
    console.log("Hii");

    id = (id + 1) % users.length;

    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

    var userCountry = document.getElementById("user-country");
    userCountry.innerHTML = users[id].country;

    var userAge = document.getElementById("user-age");
   userAge.innerHTML = "Age: " + users[id].age;
}

function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var usersData = data.results[0];

            var userImage = document.getElementById("user-image");
            userImage.src = usersData.picture.large;

            var userName = document.getElementById("user-name");
            userName.innerHTML =
                usersData.name.first + " " + usersData.name.last;

            var userGender = document.getElementById("user-gender");

var genderSymbol = "";
if (usersData.gender === "male") {
    genderSymbol = " ♂️";
} else if (usersData.gender === "female") {
    genderSymbol = " ♀️";
}

userGender.innerHTML = usersData.gender + genderSymbol;

            var userCountry = document.getElementById("user-country");
            userCountry.innerHTML = usersData.location.country;

            var userAge = document.getElementById("user-age");
userAge.innerHTML = "Age: " + usersData.dob.age;
        })
        .catch(function(err) {
            console.log("Error:", err);
        });
}

