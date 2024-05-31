CREATE TABLE student (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  dob DATE NOT NULL,
  contact VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  department INT NOT NULL,
  year INT NOT NULL,
  specialization VARCHAR(255) NOT NULL,
  extracurricular TEXT,
  co_curricular TEXT,
);

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE year (
  id INT AUTO_INCREMENT PRIMARY KEY,
  year INT NOT NULL
);

