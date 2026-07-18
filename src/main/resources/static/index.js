console.log("Hello from JS");

const users = [
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

let id = 0;

/* =========================
   RANDOM USER HISTORY
   ========================= */

let randomUserHistory = [];
let historyIndex = -1;
const MAX_HISTORY = 10;

/* =========================
   DISPLAY LOCAL USER
   ========================= */

function displayUser(user) {
    document.getElementById("user-image").src = user.img;
    document.getElementById("user-name").innerHTML = user.name;
    document.getElementById("user-gender").innerHTML = user.gender;
    document.getElementById("user-country").innerHTML = user.country;
    document.getElementById("user-age").innerHTML =
        "Age: " + user.age;
}

/* =========================
   DISPLAY RANDOM USER
   ========================= */

function displayRandomUser(user) {
    const genderSymbol =
        user.gender === "male" ? " ♂️" : " ♀️";

    document.getElementById("user-image").src =
        user.picture.large;

    document.getElementById("user-name").innerHTML =
        `${user.name.first} ${user.name.last}`;

    document.getElementById("user-gender").innerHTML =
        user.gender + genderSymbol;

    document.getElementById("user-country").innerHTML =
        user.location.country;

    document.getElementById("user-age").innerHTML =
        "Age: " + user.dob.age;
}

/* =========================
   TOGGLE LOCAL USERS
   ========================= */

function toggle() {
    id = (id + 1) % users.length;
    displayUser(users[id]);
}

/* =========================
   RANDOM USER
   ========================= */

function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            randomUserHistory.push(user);

            if (randomUserHistory.length > MAX_HISTORY) {
                randomUserHistory.shift();
            }

            historyIndex = randomUserHistory.length - 1;

            displayRandomUser(user);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

/* =========================
   PREVIOUS RANDOM USER
   ========================= */

function previousRandomUser() {
    if (historyIndex > 0) {
        historyIndex--;
        displayRandomUser(
            randomUserHistory[historyIndex]
        );
    } else {
        alert("No older random users available");
    }
}

/* =========================
   NEXT RANDOM USER
   ========================= */

function nextRandomUser() {
    if (
        historyIndex <
        randomUserHistory.length - 1
    ) {
        historyIndex++;
        displayRandomUser(
            randomUserHistory[historyIndex]
        );
    } else {
        alert("No newer random users available");
    }
}

/* =========================
   THEME TOGGLE
   ========================= */

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const btn = document.getElementById("theme-btn");

    if (document.body.classList.contains("light-mode")) {
        btn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        btn.innerHTML = "☀️ White Mode";
        localStorage.setItem("theme", "dark");
    }
}



window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("theme-btn").innerHTML =
            "🌙 Dark Mode";
    }

    displayUser(users[0]);
});