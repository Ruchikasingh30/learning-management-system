function hideAllMenus() {
    document.getElementById("adminMenu").style.display = "none";
    document.getElementById("instructorMenu").style.display = "none";
    document.getElementById("studentMenu").style.display = "none";
}

function showAdminMenu() {
    hideAllMenus();
    document.getElementById("adminMenu").style.display = "block";
}

function showInstructorMenu() {
    hideAllMenus();
    document.getElementById("instructorMenu").style.display = "block";
}

function showStudentMenu() {
    hideAllMenus();
    document.getElementById("studentMenu").style.display = "block";
}

function goBack() {
    hideAllMenus();
}

function manageUsers() {
    alert("Managing users: User created/updated/deleted successfully!");
}

function manageCourses() {
    alert("Managing courses: Course created/updated/deleted successfully!");
}

function viewPerformanceAnalytics() {
    alert("Viewing performance analytics: Reports and visualizations generated!");
}

function manageSystemSettings() {
    alert("Managing system settings: Settings updated successfully!");
}

function createCourse() {
    alert("Creating course: Course content added successfully!");
}

function gradeAssignments() {
    alert("Grading assignments: Grades and feedback provided!");
}

function monitorStudents() {
    alert("Monitoring students: Student performance reports displayed!");
}

function enrollInCourse() {
    alert("Enrolling in course: Enrolled successfully!");
}

function accessMaterials() {
    alert("Accessing materials: Materials accessed successfully!");
}

function submitAssignment() {
    alert("Submitting assignment: Assignment submitted successfully!");
}

function trackProgress() {
    alert("Tracking progress: Progress report displayed!");
}