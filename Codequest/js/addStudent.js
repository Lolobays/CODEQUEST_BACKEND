
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, child, onValue, get, set, update, remove } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPuz2lTQpHSsvp-JG6_Oy4pp1CG-Mp2tc",
    authDomain: "codequest-e6ca2.firebaseapp.com",
    projectId: "codequest-e6ca2",
    storageBucket: "codequest-e6ca2.firebasestorage.app",
    messagingSenderId: "923468819779",
    appId: "1:923468819779:web:b81ffa5eed37996e5413f6",
    measurementId: "G-B70FKVX4TS"
  };    


const app = initializeApp(firebaseConfig);
const db = getDatabase();



function addStudents(){

    var fname = document.getElementById("fName").value;
    var mname = document.getElementById("mName").value;
    var lname = document.getElementById("lName").value;
    var sectionlist = document.getElementById("fName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var studentid = document.getElementById("studentID").value;

    const reference = ref(db, 'user/' + fname); 

    var fullname = fname + " " + mname + " " + lname;

    if(!fname || !mname || !lname || ! sectionlist ||  !username || ! password || !studentid ){
        alert("Fill the information");

    }else{   
        alert("Information is saved")
        clearForm();

        set(reference, {
            Name : fullname,
            Section : sectionlist,
            UserName : username,
            Password : password,
            StudentID : studentid
        })
    }

    

    
    
}

let dataUserList = [];

const SelectAllData = () => {
    const dbRef = ref(db, "user"); // Reference to "user" node in Firebase

    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            dataUserList = [];
            snapshot.forEach((childSnapshot) => {
                dataUserList.push(childSnapshot.val());
            });
            AddAllRecords(); // Update the table whenever data changes
        } else {
            console.log("No data available");
            document.getElementById("studentTable").innerHTML = ""; // Clear table if no data
        }
    }, (error) => {
        console.error("Error fetching real-time data:", error);
    });
};

const AddRecords = (FullName, StudentID, Section, UserName, Password) => {
    let trow = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerHTML = FullName;
    td2.innerHTML = StudentID;
    td3.innerHTML = Section;
    td4.innerHTML = UserName;
    td5.innerHTML = Password;

    trow.append(td1, td2, td3, td4, td5);

    document.getElementById("studentTable").appendChild(trow);
};

const AddAllRecords = () => {
    document.getElementById("studentTable").innerHTML = ""; // Clear old data before adding new ones
    dataUserList.forEach((user) => {
        AddRecords(user.Name, user.StudentID, user.Section, user.UserName, user.Password);
    });
};

window.addEventListener("load", SelectAllData);


// Attach function to button
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".addBtn").addEventListener("click", addStudents);
});


function clearForm() {
    document.getElementById("fName").value = "";
    document.getElementById("mName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("studentID").value = "";
    document.getElementById("sectionList").value = "";
}
