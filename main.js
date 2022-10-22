const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");


const home = document.querySelector(".home");
const about_me = document.querySelector(".about-me");
const tech = document.querySelector(".tech-stack");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const home_mobile = document.querySelector(".mobile-menu .home");
const about_me_mobile = document.querySelector(".mobile-menu .about-me");
const tech_mobile = document.querySelector(".mobile-menu .tech-stack");
const skills_mobile = document.querySelector(".mobile-menu .skills");
const projects_mobile = document.querySelector(".mobile-menu .projects");
const contact_mobile = document.querySelector(".mobile-menu .contact");

//home_mobile.addEventListener("click",()=>{console.log("Heelo")});

const home_id = document.querySelector("#home");
const about_me_id = document.querySelector("#about-me");
const tech_id = document.querySelector("#tech-stack");
const skills_id = document.querySelector("#skills");
const projects_id = document.querySelector("#projects");
const contact_id = document.querySelector("#contact");



hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-open");
    console.log(mobile_menu.classList);
})

about_me_mobile.addEventListener("click", () => {
    about_me_mobile.classList.toggle("is-active");

    if (about_me_id.classList.contains("non-vis")) {
        about_me_id.classList.toggle("non-vis");
    }

    about_me_id.classList.toggle("vis");

    if (home_mobile.classList.contains("is-active")) {
        home_mobile.classList.toggle("is-active");
    }

    if (tech_mobile.classList.contains("is-active")) {
        tech_mobile.classList.toggle("is-active");
    }

    if (skills_mobile.classList.contains("is-active")) {
        skills_mobile.classList.toggle("is-active");
    }

    if (projects_mobile.classList.contains("is-active")) {
        projects_mobile.classList.toggle("is-active");
    }

    if (contact_mobile.classList.contains("is-active")) {
        contact_mobile.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    hamburger.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-open");
    print();
});


home.addEventListener("click", () => {

   homeClick();

});

about_me.addEventListener("click", () => {
    aboutMeClick();
});

tech.addEventListener("click", () => {
   techStackClick();
});

skills.addEventListener("click", () => {
   skillsClick();
});

projects.addEventListener("click", () => {
    projectsClick();
});

contact.addEventListener("click", () => {
    contactClick();
});



function homeClick(){
    home.classList.toggle("is-active");

    if (home_id.classList.contains("non-vis")) {
        home_id.classList.toggle("non-vis");
    }

    home_id.classList.toggle("vis");

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    print();
}

function aboutMeClick(){
    about_me.classList.toggle("is-active");

    if (about_me_id.classList.contains("non-vis")) {
        about_me_id.classList.toggle("non-vis");
    }

    about_me_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }

    print();
}

function techStackClick(){
    tech.classList.toggle("is-active");

    if (tech_id.classList.contains("non-vis")) {
        tech_id.classList.toggle("non-vis");
    }

    tech_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }
    print();
}

function skillsClick(){
    skills.classList.toggle("is-active");

    if (skills_id.classList.contains("non-vis")) {
        skills_id.classList.toggle("non-vis");
    }

    skills_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }
    print();
}

function projectsClick(){
    projects.classList.toggle("is-active");

    if (projects_id.classList.contains("non-vis")) {
        projects_id.classList.toggle("non-vis");
    }

    projects_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (contact.classList.contains("is-active")) {
        contact.classList.toggle("is-active");
    }


    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }

    if (contact_id.classList.contains("vis")) {
        contact_id.classList.toggle("vis");
    }
    print();
}

function contactClick(){
    contact.classList.toggle("is-active");


    if (contact_id.classList.contains("non-vis")) {
        contact_id.classList.toggle("non-vis");
    }

    contact_id.classList.toggle("vis");

    if (home.classList.contains("is-active")) {
        home.classList.toggle("is-active");
    }

    if (about_me.classList.contains("is-active")) {
        about_me.classList.toggle("is-active");
    }

    if (tech.classList.contains("is-active")) {
        tech.classList.toggle("is-active");
    }

    if (skills.classList.contains("is-active")) {
        skills.classList.toggle("is-active");
    }

    if (projects.classList.contains("is-active")) {
        projects.classList.toggle("is-active");
    }

    if (home_id.classList.contains("vis")) {
        home_id.classList.toggle("vis");
    }

    if (tech_id.classList.contains("vis")) {
        tech_id.classList.toggle("vis");
    }

    if (skills_id.classList.contains("vis")) {
        skills_id.classList.toggle("vis");
    }

    if (projects_id.classList.contains("vis")) {
        projects_id.classList.toggle("vis");
    }

    if (about_me_id.classList.contains("vis")) {
        about_me_id.classList.toggle("vis");
    }
    print();
}



function print() {
    console.log(home_id.classList);
    console.log(projects_id.classList);
    console.log(tech_id.classList);
    console.log(skills_id.classList);
    console.log(contact_id.classList);
    console.log(about_me_id.classList);
}