console.log("hello from js");

var users = [
    {
        name: "John Doe",
        gender: "Male♂️",
        country: "USA",
        college: "Stanford University",
        img: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female♀️",
        country: "Canada",
        college: "University of Toronto",
        img: "jane.png"
    }, 
    {
        name: "Kota Akhilesh",
        gender: "Male♂️",
        country: "India",
        college: "VNR VJIET",
        img: "akhil.jpeg"
    }
];

var id = 0;

function toggle() {
    console.log("Hii");

    id = (id + 1) % users.length;

    document.getElementById("user-image").src = users[id].img;
    document.getElementById("user-name").innerHTML = users[id].name;
    document.getElementById("user-gender").innerHTML = users[id].gender;
    document.getElementById("user-country").innerHTML = users[id].country;
    document.getElementById("user-college").innerHTML = users[id].college;
}