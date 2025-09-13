// Creating Teacher Interface
interface Teacher {
  readonly firstName: string;      
  readonly lastName: string;       
  fullTimeEmployee: boolean;       
  yearsOfExperience?: number;      
  location: string;             
  [key: string]: any;              
}

// Using the Teacher Interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property allowed
};

console.log(teacher3);

// Add teacher to an array
const teacherList: Teacher[] = [teacher3];

// Render a table
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Loop through studentsList and create rows
teacherList.forEach((teacher3) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = teacher3.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = teacher3.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);