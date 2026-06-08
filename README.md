# Student Card Search & Filter System — Project Task No. 16

<img src="./images/demo.png" alt="Project demo">

## Project Overview

This project is a modern and responsive Student Card Search & Filter System built using pure HTML, CSS, and JavaScript. The application dynamically displays student cards and allows users to instantly search students by their names using real-time filtering functionality.

The main goal of this project is to improve understanding of:

- DOM Manipulation
- Array Methods in JavaScript
- Dynamic UI Rendering
- Responsive Layout Design
  - Here I use a important rule of css Grid
  - grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  - min card width 300px,
  - Automatically creates column,
  - responsive on all devices
- Search Functionality usong Filter and includes
- Modern Frontend UI Development

The project focuses on creating a clean user experience while practicing core frontend development concepts without using any external frameworks or libraries.

---

# Project Features

- Responsive Navigation Bar
- Fully responsive navigation bar
- Works smoothly on desktop, tablet, and mobile devices
- Includes an integrated student search system

# Dynamic Student Cards

- Student cards are generated dynamically using JavaScript
- Each card contains:
- Student Image
- Name
- Roll Number
- Marks
- Class
- Address

---

## Real-Time Search Functionality

Users can instantly search students by typing their names.

The project uses:

- filter() method ✅
- includes() method ✅
- toLowerCase() method ✅

# This makes the search:

- Fast
- Dynamic
- Case-insensitive

Example:

- rahul
- Rahul
- RAHUL

All will return the same result.

# Smart Data Handling

The project also includes:

- parseInt() usage for marks comparison ✅
- Dynamic star rating for top-performing students
- "Data Not Found" message handling

## JavaScript Concepts Practiced

This project is especially useful for beginners learning JavaScript array methods and DOM manipulation.

Methods Used
# map()

- Used to dynamically generate all student cards.

# filter()

- Used to filter student data based on search input.

# includes()

- Used for partial text matching during search.

# parseInt()

- Used to compare marks numerically.

# addEventListener()

- Used for handling user interactions.

# innerHTML

- Used for dynamically rendering UI content.

# Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

No frameworks or libraries were used in this project.


## How to Run the Project

# Step 1: Download the Project

Download or clone the project files.

# Step 2: Open in Code Editor

- Open the project folder in any code editor such as:

- VS Code
- Sublime Text
- Atom

# Step 3: Run the Project

Open the index.html file in your browser.

You can:

Double-click the index.html file
OR use the Live Server Extension in VS Code
Learning Outcomes

- After completing this project, you will understand:

✅ How dynamic rendering works in JavaScript
✅ How search filtering systems are created
✅ How to manipulate the DOM
✅ How array methods work in real-world projects
✅ How responsive UI layouts are built


# Future Improvements

Possible future enhancements include:

- Backend database integration
- Student add/remove functionality
- Advanced filtering options
- Sorting by marks or class
- Local storage support
- Framework version using React.js
- Dark mode support
- Pagination system

# Author

Developed with ❤️ by Giyas Ahmed.

Happy Coding... 💻

# License

This project is created for educational and practice purposes only.