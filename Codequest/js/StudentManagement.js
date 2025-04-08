let students = [];

function addStudents() {
    let firstName = document.getElementById("fName").value;
    let middleName = document.getElementById("mName").value;
    let lastName = document.getElementById("lName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let studentNumber = document.getElementById("studentID").value;
    let section = document.getElementById("sectionList").value;

    if (firstName && middleName && lastName && username && password && section && studentNumber) {
        let student = { 
            fullName: `${firstName} ${middleName} ${lastName}`, 
            studentNumber, 
            section, 
            username, 
            password 
        };

        students.push(student);
        displayStudents();
    }
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach(student => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.fullName}</td>
            <td>${student.studentNumber}</td>
            <td>${student.section}</td>
            <td>${student.username}</td>
            <td>${student.password}</td>
        `;

        row.addEventListener("click", function () {
            redirectToStudent(student);
        });

        table.appendChild(row);
    });
}

function redirectToStudent(student) {
    localStorage.setItem("selectedStudent", JSON.stringify(student)); // Store in localStorage
    window.location.href = "studentmanagement2.html"; // Redirect
}

// Attach function to button
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".addBtn").addEventListener("click", addStudents);
});
