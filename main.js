const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");


const home = document.querySelector(".home");
const about_me = document.querySelector(".about-me");
const tech = document.querySelector(".tech-stack");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

const home_mobile = document.querySelector(".mobile-menu .home");

home_mobile.addEventListener("click",()=>{console.log("Heelo")});

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



home.addEventListener("click", () => {
    console.log(home_id.classList);


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

});

about_me.addEventListener("click", () => {
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
});

tech.addEventListener("click", () => {
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
});

skills.addEventListener("click", () => {
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
});

projects.addEventListener("click", () => {
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
});

contact.addEventListener("click", () => {
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
});


function print() {
    console.log(home_id.classList);
    console.log(projects_id.classList);
    console.log(tech_id.classList);
    console.log(skills_id.classList);
    console.log(contact_id.classList);
    console.log(about_me_id.classList);
}