let currentUser = null;

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  
  if (!username || !password) {
    showMessage("Please fill in all fields.");
    return;
  }
  
  // Dummy login - replace with real backend check
  currentUser = { username, role };
  showDashboard();
}

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  
  if (!username || !password) {
    showMessage("Please fill in all fields.");
    return;
  }
  
  // Dummy register - replace with real backend
  showMessage("Registration successful. Please login.");
}

function showDashboard() {
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("welcome-msg").innerText = `Welcome, ${currentUser.username} (${currentUser.role})`;
  
  if (currentUser.role === "student") {
    document.getElementById("student-dashboard").classList.remove("hidden");
  } else if (currentUser.role === "instructor") {
    document.getElementById("instructor-dashboard").classList.remove("hidden");
  }
}

function logout() {
  currentUser = null;
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("student-dashboard").classList.add("hidden");
  document.getElementById("instructor-dashboard").classList.add("hidden");
  document.getElementById("auth-section").classList.remove("hidden");
}

function showMessage(msg) {
  document.getElementById("auth-message").innerText = msg;
}

function markAttendance(course) {
  alert(`Attendance marked for ${course}`);
}

function addCourse() {
  const courseName = document.getElementById("course-name").value.trim();
  if (courseName) {
    const li = document.createElement("li");
    li.innerHTML = `${courseName} <button onclick="viewRoster('${courseName}')">View Roster</button>`;
    document.getElementById("instructor-courses").appendChild(li);
    document.getElementById("course-name").value = "";
  } else {
    alert("Please enter a course name.");
  }
}

function viewRoster(course) {
  alert(`Viewing roster for ${course}`);
}
