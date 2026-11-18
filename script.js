// TECHNOVA PROJECTS

const projects = [
    {
        id: 1,
        name: "Main Express",
        category: "Import and Export",
        description: "A website for an import and export trading company.",
        image: "",
        link: "main-express.html"
    },
    {
        id: 2,
        name: "Jewelry World",
        category: "Jewelry Website",
        description: "A website showcasing jewelry products and services.",
        image: "",
        link: "jewelry-world.html"
    },
    {
        id: 3,
        name: "Mascot Empire Cosmetic",
        category: "Beauty, Hair and Nails",
        description: "A business offering cosmetics, hairdressing and nail services.",
        image: "",
        link: "mascot-empire-cosmetic.html"
    },
    {
        id: 4,
        name: "Sarah Stitch and Style",
        category: "Fashion and Tailoring",
        description: "Female native wear, bridal outfits and custom styling.",
        image: "",
        link: "sarah-stitch-and-style.html"
    }
];

// DISPLAY PROJECTS

function displayProjects() {
    const projectList = document.getElementById("project-list");

    if (!projectList) return;

    projectList.innerHTML = "";

    projects.forEach(function(project) {
        const card = document.createElement("div");
        card.className = "card project-card";

        card.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>${project.category}</strong></p>
            <p>${project.description}</p>
            <p>
                <a href="${project.link}" target="_blank">
                    View Project
                </a>
            </p>
        `;

        projectList.appendChild(card);
    });
}

// CHECK FOR NEW PROJECTS

function checkForNewProjects() {
    if (projects.length === 0) return;

    const latestProject = projects[projects.length - 1];
    const previousProject = localStorage.getItem("technovaLatestProject");

    if (previousProject !== null &&
        Number(previousProject) !== latestProject.id) {

        const notification = document.getElementById("notification");

        if (notification) {
            notification.style.display = "block";
            notification.textContent =
                "TechNova has added a new project! Visit our portfolio.";

            setTimeout(function() {
                notification.style.display = "none";
            }, 5000);
        }
    }

    localStorage.setItem("technovaLatestProject", latestProject.id);
}

// START WEBSITE

displayProjects();
checkForNewProjects();