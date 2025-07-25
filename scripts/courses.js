const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Go thru array
const courseList = document.getElementById('courses');
const mydialog = document.getElementById('course-details');

const div = document.createElement('div');

const subjectName = document.createElement('h1');

const closeButton = document.createElement('button');
closeButton.textContent = "x";
closeButton.addEventListener("click", () => {
    mydialog.close();
})

const title = document.createElement('h2');
const credits = document.createElement('p');
const certificate = document.createElement('p');
const description = document.createElement('p');
const techStack = document.createElement('p');

div.appendChild(subjectName);
div.appendChild(closeButton);
mydialog.appendChild(div);
mydialog.appendChild(title);
mydialog.appendChild(credits);
mydialog.appendChild(certificate);
mydialog.appendChild(description);
mydialog.appendChild(techStack);

courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = `${course.subject} ${course.number}`;
    li.classList.add(course.subject, 'show');
    
    if (course.completed) {
        li.classList.add('completed');
    }

    li.addEventListener("click", () => showDialog(course))
    courseList.appendChild(li);
})


function showDialog(course) {

    subjectName.innerHTML = `${course.subject}${course.number}`;
    title.textContent = course.title;
    credits.innerHTML = `${course.credits} credits`
    certificate.textContent = course.certificate;
    description.textContent = course.description;
    techStack.textContent = course.technology;
    mydialog.showModal();
}


// Configure buttons

const btnAll = document.getElementById('all');
const btnWDD = document.getElementById('wdd');
const btnCSE = document.getElementById('cse');
const listedCourses = document.querySelectorAll('#courses li');



btnAll.addEventListener('click', () => {
    listedCourses.forEach(li => {
        li.classList.add('show');
    });

})

btnWDD.addEventListener('click', () => {
    listedCourses.forEach(li => {
        if (li.classList.contains('WDD')) {
            li.classList.add('show');
        } else {
            li.classList.remove('show');
        }
    });
} )

btnCSE.addEventListener('click', () => {
    listedCourses.forEach(li => {
        if (li.classList.contains('CSE')) {
            li.classList.add('show');
        } else {
            li.classList.remove('show');
        }
        
    })

})
