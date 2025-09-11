// scripts/courselistarray.js
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// function create course card
function createCourseCard(course) {
    const statusClass = course.completed ? 'completed' : 'pending';
    
    return `
        <article class="course-card ${statusClass}">
            <header class="course-header">
                <h3 class="course-title">${course.subject} ${course.number}: ${course.title}</h3>
                <span class="course-credits">${course.credits} credits</span>
            </header>
            
            <p class="course-description">${course.description}</p>
            
            <div class="course-technologies">
                ${course.technology.map(tech => 
                    `<span class="tech-badge">${tech}</span>`
                ).join('')}
            </div>
            
            <div class="course-footer">
                <span class="course-status ${statusClass}">
                    ${course.completed ? '✅ Completed' : '⏳ Pending'}
                </span>
                <span class="course-certificate">${course.certificate}</span>
            </div>
        </article>
    `;
}

// put the courses
function renderCourses(filter = 'all') {
    const coursesGrid = document.getElementById('courses-grid');
    const coursesHeading = document.getElementById('courses-heading');
    
    if (!coursesGrid) return;
    
    let filteredCourses = courses;
    let headingText = 'All Courses';
    
    // filter
    if (filter !== 'all') {
        filteredCourses = courses.filter(course => course.subject === filter);
        headingText = `${filter} Courses`;
    }
    
    // heading
    coursesHeading.textContent = headingText;
    
    // put the courses
    const coursesHTML = filteredCourses.map(course => 
        createCourseCard(course)
    ).join('');
    
    coursesGrid.innerHTML = coursesHTML;
}

// setupFilterButtons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
        
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            
            this.classList.add('active');
            
            
            const filter = this.getAttribute('data-filter');
            
            
            renderCourses(filter);
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    
    renderCourses('all');
    
    
    setupFilterButtons();
});


window.renderCourses = renderCourses;
window.coursesData = courses;