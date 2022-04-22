// toggle menu
const menuBtn= document.querySelectorAll(".menu_btn");
const menu=document.querySelector('.menu');
const links=document.querySelectorAll('.menu li');

menuBtn.forEach(btn=>{
    btn.addEventListener('click', sidenavtoggle);
});
function sidenavtoggle(){
    let delay=100;
    menu.classList.toggle('menu_open');
    setTimeout(()=> {
        resetAnimations();
    }, delay * (links.length+1));
    links.forEach(link=>{
        link.style.opacity="0";
        link.style.animation="slideIn 400ms ease-in-out forwards";
        link.style.animationDelay=delay+"ms";
        delay+=100;
    });
    function resetAnimations(){
        links.forEach(link=>{
            link.style.animation="none";
            link.style.opacity="1";
        })
    }
}
// active link
const currentactive=location.href;
const menuitem=document.querySelectorAll('a');
const menulength=menuitem.length
for (let i = 0; i<menulength; i++){
    if(menuitem[i].href === currentactive){
        menuitem[i].className="link_active"
    }
}

// ScrollReveal Animation
let sr=ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase_info", { delay:600 });
sr.reveal(".showcase_image", { origin: "top", delay:700 });
// sr.reveal(".projects_card", { origin: "top", delay:700 });
sr.reveal(".about_info", { delay:200 });
sr.reveal(".skills_header", { delay:200 });

//skills
const skillsContent= document.getElementsByClassName('skill_content'),
      skillsHeader= document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skill_content skill_close"
    }
    if(itemClass === "skill_content skill_close"){
        this.parentNode.className = "skill_content skill_open"
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
// contact
const contactbtn=document.querySelector(".contact_btn");
const firstName=document.querySelector(".first_name");
const lastName=document.querySelector(".last_name");
const email=document.querySelector(".email");
const msg=document.querySelector(".message");

contactbtn.addEventListener('click', ()=>{
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                firstname: firstName.value,
                lastname: lastName.value,
                email: email.value,
                msg: msg.value,
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data)
        })
    }
})