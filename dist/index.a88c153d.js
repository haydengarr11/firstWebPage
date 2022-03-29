const mainDiv = document.getElementById("insertHere");
//h1 creation
const heading1 = document.createElement("h1");
heading1.textContent = "Using TypeScript and HTML";
heading1.id = "tsandhtml";
//h2 creation
const heading2 = document.createElement("h2");
heading2.textContent = "About me";
heading2.id = "aboutme";
//h3 creation
const heading3 = document.createElement("h3");
heading3.textContent = "Courses in Progress";
heading3.id = "inprogress";
//h4 creation
const heading4 = document.createElement("h4");
heading4.textContent = "Courses Completed";
heading4.id = "completed";
//adding children to Div in body of html doc
mainDiv?.appendChild(heading1);
mainDiv?.appendChild(heading2);
mainDiv?.appendChild(heading3);
mainDiv?.appendChild(heading4);
//creating personal info object
const PersonalInformation = {
    name: "Hayden Garrett",
    email: "garretth@mail.gvsu.edu",
    pets: 1,
    hobbies: [
        "Reading",
        "Baseball",
        "Board Games",
        "Card Games"
    ],
    likesWaffles: true
};
const aboutMeTable = document.createElement('table');
heading2.appendChild(aboutMeTable);
for(let rowName in PersonalInformation){
    const newRow = document.createElement('tr');
    newRow.textContent = rowName;
    aboutMeTable.appendChild(newRow);
    const tableData = document.createElement('td');
    //if the type of the rowName is an object then it will create a list of all elements in the object
    //or if it's not an object then it will just add the single piece of data to the row 
    if (typeof Object(PersonalInformation)[rowName] === "object") {
        const hobbyList = document.createElement("ul");
        tableData.appendChild(hobbyList);
        for(let anItem in Object(PersonalInformation)[rowName]){
            const listItem = document.createElement('li');
            listItem.textContent = Object(PersonalInformation)[rowName][anItem];
            hobbyList.appendChild(listItem);
        }
        tableData.appendChild(hobbyList);
        newRow.appendChild(tableData);
    } else {
        tableData.textContent = Object(PersonalInformation)[rowName];
        newRow.appendChild(tableData);
    }
}
//Created an extra paragraph element that holds a link to my twitter
const twitPara = document.createElement('p');
twitPara.textContent = "Twitter Handle: ";
const twitterHandle = document.createElement('a');
twitterHandle.textContent = "@HaydenSGarrett_";
twitterHandle.setAttribute("href", "https://twitter.com/HaydenSGarrett_");
twitPara.appendChild(twitterHandle);
heading2.appendChild(twitPara);
const onGoing = [
    {
        code: "CIS371-01",
        name: "Web Application Development",
        credits: 3,
        classTimes: [
            "Mon 2-3p",
            "Wed 2-3p",
            "Fri 2-3p"
        ]
    },
    {
        code: "CIS452-30",
        name: "Operating Systems Concepts",
        credits: 4,
        classTimes: [
            "Mon 12-1p",
            "Wed 12-1p",
            "Thur 4-6p",
            "Fri 12-1p"
        ]
    },
    {
        code: "CIS467-01",
        name: "Computer Science Project",
        credits: 4,
        classTimes: [
            "Mon 4-5:15p",
            "Wed 4-5:15p"
        ]
    },
    {
        code: "HST204-03",
        name: "SWS World History since 1500",
        credits: 3,
        classTimes: [
            "Mon 10-11a",
            "Wed 10-11a",
            "Fri 10-11a"
        ]
    }, 
];
//onGoing class list with class times below each class
const onGoingNumberedList = document.createElement("ol");
for(let aClass in onGoing){
    const onGoingItem = document.createElement('li');
    onGoingItem.textContent = Object(onGoing)[aClass].code + " " + Object(onGoing)[aClass].name + " (" + Object(onGoing)[aClass].credits + " credits)";
    const meetingList = document.createElement('ul');
    for(let classTime in Object(onGoing)[aClass].classTimes){
        const oneClass = document.createElement('li');
        oneClass.textContent = Object(onGoing)[aClass].classTimes[classTime];
        meetingList.appendChild(oneClass);
    }
    onGoingItem.appendChild(meetingList);
    onGoingNumberedList.appendChild(onGoingItem);
    heading3.appendChild(onGoingNumberedList);
}
// Completed courses where I have 7 courses added from previous semesters
const complete = [
    {
        code: "CIS241",
        name: "System-Level Programming & Utilities",
        credits: 3,
        semesterCompleted: "Fall 2020"
    },
    {
        code: "CIS263",
        name: "Data Structures and Algorithms",
        credits: 3,
        semesterCompleted: "Fall 2020"
    },
    {
        code: "CIS350",
        name: "Intro Software Egr",
        credits: 3,
        semesterCompleted: "Winter 2021"
    },
    {
        code: "MTH203",
        name: "Calculus III",
        credits: 4,
        semesterCompleted: "Fall 2019"
    },
    {
        code: "CIS162",
        name: "Computer Science 1",
        credits: 4,
        semesterCompleted: "Fall 2019"
    },
    {
        code: "COM201",
        name: "Speech",
        credits: 3,
        semesterCompleted: "Fall 2020"
    },
    {
        code: "MTH225",
        name: "Discrete Structures: CS 1",
        credits: 3,
        semesterCompleted: "Fall 2020"
    }, 
];
//Completed Courses table section first creating the headers for the columns then
//looping to fill the data of the table
const completedTable = document.createElement('table');
heading4.appendChild(completedTable);
const completedHeader = document.createElement('tr');
const courseRow = document.createElement('th');
courseRow.textContent = "Course";
const creditRow = document.createElement('th');
creditRow.textContent = "Credit";
const completedRow = document.createElement('th');
completedRow.textContent = "Completed";
completedHeader.appendChild(courseRow);
completedHeader.appendChild(creditRow);
completedHeader.appendChild(completedRow);
completedTable.appendChild(completedHeader);
let total = 0;
//creation of the Courses Completed Table
for(let aCourse in complete){
    const newRow = document.createElement('tr');
    completedTable.appendChild(newRow);
    const courseInfo = document.createElement('td');
    courseInfo.textContent = Object(complete)[aCourse].code + " " + Object(complete)[aCourse].name;
    newRow.appendChild(courseInfo);
    const numCreds = document.createElement('td');
    numCreds.textContent = Object(complete)[aCourse].credits;
    newRow.appendChild(numCreds);
    const semesterComp = document.createElement('td');
    semesterComp.textContent = Object(complete)[aCourse].semesterCompleted;
    newRow.appendChild(semesterComp);
    total += Object(complete)[aCourse].credits;
}
// created the total row by calculating total of all credits from completed courses array
const totalRow = document.createElement('tr');
const totalSet = document.createElement('td');
totalSet.textContent = "Total: ";
totalRow.appendChild(totalSet);
const totalNum = document.createElement('td');
totalNum.textContent = total.toString();
totalRow.appendChild(totalNum);
completedTable.appendChild(totalRow);
//setting class names and attribute to demonstrate css styling
completedTable.className = "table";
aboutMeTable.className = "table";
heading4.setAttribute("title", "A list of completed classes at GVSU");

//# sourceMappingURL=index.a88c153d.js.map
