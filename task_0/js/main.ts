interface Student {
    fisrtName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    fisrtName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'USA',
  };
  
  const student2: Student = {
    fisrtName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'USA',
  };
  
  
  // création de la table HTML
  const table = document.createElement('table');
  
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow);
  
  document.body.appendChild(table);
  
  // Créer le tableau studentsList
  const studentsList: Student[] = [student1, student2];
  
  // Parcourir le tableau studentsList et ajouter des lignes à la table
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
  
    const cellFirstName = document.createElement('td');
    cellFirstName.textContent = student.fisrtName;
    row.appendChild(cellFirstName);
  
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    row.appendChild(cellLocation);
  
    table.appendChild(row);
  });