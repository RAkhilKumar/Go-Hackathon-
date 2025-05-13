document.addEventListener("DOMContentLoaded", function () {
    const jobListings = document.getElementById('job-listings');
    const toggleButton = document.getElementById('toggle-button');
    let showAll = false;

    // Updated JSON data with image URLs
    const jobs = [
        {
            "company": "MangosOrange Agritech",
            "title": "Full Stack Developer Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/mangosorange-agritech.png"
        },
        {
            "company": "Hiremi Technologies",
            "title": "Web Developer Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images//Hiremi.png"
        },
        {
            "company": "Hackveda LLC",
            "title": "Data Science AI",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Closed",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/data science ai.png"
        },
        {
            "company": "Spark to Ideas",
            "title": "IT Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/spark to ideas.png"
        },
        {
            "company": "CRTD Technologies",
            "title": "Software Developer Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/CRDT technologies.png"
        },
        {
            "company": "Microsoft Azure",
            "title": "Cloud Computing with Azure AI",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/Microsoft Azur.png"
        },
        {
            "company": "JAVA DSA instructor",
            "title": "Coding Blocks",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/java DSA instructor.png"
        },
        {
            "company": "AIML Data Scientist Intern",
            "title": "GENPACT",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/Genpact.png"
        },
        {
            "company": "IoT Security Specialist",
            "title": "CISCO ",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/cisco.png"
        },
        {
            "company": "Spark to Ideas",
            "title": "IT Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/spark to ideas.png"
        },
        {
            "company": "CRTD Technologies",
            "title": "Software Developer Intern",
            "branch": "BE, Btech, BCA, MCA, BSc",
            "salary": "INR 25,000 per month",
            "status": "Active",
            "skills": ["HTML & ", "CSS, ", " JS,", " ReactJS"],
            "location": "Remote Online",
            "applicationStatus": "Active",
            "image": "../Public/images/CRDT technologies.png"
        }
    ];

    const jobsPerPage = 6; // Number of jobs to show initially
    let visibleJobs = jobsPerPage;

    // Function to generate and display job cards
    function displayJobs() {
        jobListings.innerHTML = ''; // Clear existing job cards

        jobs.slice(0, visibleJobs).forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');

            jobCard.innerHTML = `
                <img src="${job.image}" alt="${job.company}" class="job-image"/>
                <h4>${job.title}</h4>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Branch:</strong> ${job.branch}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Application Status:</strong> <span class="status">${job.applicationStatus}</span></p>
                <p><strong>Location:</strong> ${job.location}</p>
                <div class="skills"><strong>Skills:</strong>
                    ${job.skills.map(skill => `<span>${skill}</span>`).join('')}
                </div>
                               <a href="../Services/JobDescription.html"><button class="viewid">View JD</button></a>

                <button class="applynow">Apply Now</button>
            `;

            jobListings.appendChild(jobCard);
        });
    }

    // Display the initial set of jobs
    displayJobs();

    // Function to handle the View More/View Less functionality
    toggleButton.addEventListener('click', function () {
        if (showAll) {
            // Hide extra jobs and change button text to 'View More'
            visibleJobs = jobsPerPage;
            toggleButton.textContent = 'View More';
        } else {
            // Show all jobs and change button text to 'View Less'
            visibleJobs = jobs.length;
            toggleButton.textContent = 'View Less';
        }

        showAll = !showAll;
        displayJobs();
    });
});
