const students = [
  {
    name: "Shyam Kumar",
    rollNo: "0113",
    marks: "99%",
    class: "5",
    address: "London, UK",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Rahul Sharma",
    rollNo: "0114",
    marks: "92%",
    class: "6",
    address: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Aman Verma",
    rollNo: "0115",
    marks: "88%",
    class: "7",
    address: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Priya Das",
    rollNo: "0116",
    marks: "95%",
    class: "8",
    address: "Guwahati, India",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Riya Singh",
    rollNo: "0117",
    marks: "90%",
    class: "5",
    address: "Kolkata, India",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Kabir Ali",
    rollNo: "0118",
    marks: "85%",
    class: "6",
    address: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Sneha Roy",
    rollNo: "0119",
    marks: "97%",
    class: "7",
    address: "Chennai, India",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Arjun Mehta",
    rollNo: "0120",
    marks: "91%",
    class: "8",
    address: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Meera Patel",
    rollNo: "0121",
    marks: "93%",
    class: "5",
    address: "Ahmedabad, India",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Zoya Khan",
    rollNo: "0122",
    marks: "87%",
    class: "6",
    address: "Lucknow, India",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Rohan Das",
    rollNo: "0123",
    marks: "89%",
    class: "7",
    address: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Pooja Nair",
    rollNo: "0124",
    marks: "94%",
    class: "8",
    address: "Kochi, India",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Imran Sheikh",
    rollNo: "0125",
    marks: "82%",
    class: "5",
    address: "Jaipur, India",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Neha Kapoor",
    rollNo: "0126",
    marks: "98%",
    class: "6",
    address: "Chandigarh, India",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Yash Gupta",
    rollNo: "0127",
    marks: "84%",
    class: "7",
    address: "Patna, India",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Anjali Bora",
    rollNo: "0128",
    marks: "96%",
    class: "8",
    address: "Assam, India",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Farhan Ahmed",
    rollNo: "0129",
    marks: "86%",
    class: "5",
    address: "Shillong, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Tina Paul",
    rollNo: "0130",
    marks: "91%",
    class: "6",
    address: "Agartala, India",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Vikram Joshi",
    rollNo: "0131",
    marks: "83%",
    class: "7",
    address: "Surat, India",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60",
  },

  {
    name: "Sara Ali",
    rollNo: "0132",
    marks: "100%",
    class: "8",
    address: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=900&auto=format&fit=crop&q=60",
  },
];

const studentsCards = document.querySelector(".students-cards");
const sbtn = document.getElementById('showbtn');
const search = document.getElementById('search');



function showData(allStudents) {
  studentsCards.innerHTML = "";
  allStudents.map((student) => {
    let star = "";

    if (parseInt(student.marks) >= 90) {
      star = "⭐ ⭐";
    }if(parseInt(student.marks) >= 95){
      star = "⭐ ⭐ ⭐";
    }

    studentsCards.innerHTML += `<div class="card">
            <img
              src="${student.image}"
              alt="human"
            />
            <div class="student-details">
              <div>
                <p>Name:</p>
                <span>${student.name} ${star}</span>
              </div>

              <div>
                <p>Roll No:</p>
                <span>${student.rollNo}</span>
              </div>

              <div>
                <p>Marks:</p>
                <span>${student.marks}</span>
              </div>

              <div>
                <p>Class:</p>
                <span>${student.class}</span>
              </div>

              <div>
                <p>Address:</p>
                <span>${student.address}</span>
              </div>
            </div>
          </div>`;
  });
}

showData(students)

// ============ This method is direct change UI in every input in search box. No need to click Btn ============
//  This method is fast for UX

// 📌
search.addEventListener('input',(e)=>{
  const value = e.target.value.toLowerCase();

  const filteredData = students.filter((s)=>{
    
    return s.name.toLowerCase().includes(value);
  })
    if(filteredData.length === 0){
    document.querySelector('.r').innerHTML = "Data Not Found !⚠️"
  }else{
    document.querySelector('.r').innerHTML = ""
  }

  showData(filteredData)
})
// 📌



// ============ This method is on search btn click data will update ============
// Every keyword type and click search btn than display the result.. UX is not good..

// const searchForm = document.getElementById('searchForm');
// const sBtn = document.getElementById('sBtn');
// sBtn.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const value = search.value.toLowerCase(); // Use this tolowerCase() method that user what ever seach in backend always find data using lowercase.
//   console.log(value)

//   const filterStudent = students.filter((s)=>{
//     // return s.name === value; 
//     //☝🏻 In this situation its compare same value if Ex:- Giyas Ahmed === Giyas ahmed. For this we have to use Includes Keyword and also use toLowerCase.
    
//     return s.name.toLowerCase().includes(value);
    
//   })

//   if(filterStudent.length === 0){
//     document.querySelector('.r').innerHTML = "Data Not Found !⚠️"
//   }else{
//     document.querySelector('.r').innerHTML = ""
//   }

//   showData(filterStudent);
// })