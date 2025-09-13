// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Abdulhakeem",
  lastName: "Busari",
  age: 27,
  location: "Abuja",
};

const student2: Student = {
  firstName: "Opeyemi",
  lastName: "Oladepo",
  age: 29,
  location: "Lagos",
};

// Add students to an array
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Loop through studentsList and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
