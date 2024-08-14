document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 1, title: 'Introduction to JavaScript' },
        { id: 2, title: 'Advanced CSS Techniques' },
        { id: 3, title: 'React for Beginners' },
        { id: 4, title: 'Backend Development with Node.js' }
    ];

    const enrolledCourses = [];

    const coursesList = document.getElementById('courses');
    const enrolledCoursesList = document.getElementById('enrolled-courses');

    function renderCourses() {
        coursesList.innerHTML = courses.map(course => `
            <li>
                ${course.title}
                <button onclick="enroll(${course.id})">Enroll</button>
            </li>
        `).join('');
    }

    function renderEnrolledCourses() {
        enrolledCoursesList.innerHTML = enrolledCourses.map(course => `
            <li>
                ${course.title}
                <button onclick="unenroll(${course.id})">Unenroll</button>
            </li>
        `).join('');
    }

    function enroll(courseId)
