

let skill_name_arr = ['HTML', 'CSS', 'JS', 'Node.js']
let skill_persentage_arr = ['90%', '80%', '70%', '60%']
let skill_name = document.getElementsByClassName('skill-name')
let skill_percentage = document.getElementsByClassName('skill-percentage')


for (let i = 0; i < skill_name_arr.length; i++) {
    skill_name[i].innerHTML = skill_name_arr[i];
    skill_percentage[i].innerHTML = skill_persentage_arr[i];
}



// hambarger button
let nav_right = document.getElementsByClassName("nav-right")
let hambarger = document.getElementsByClassName("hambarger")
// nav_right[0].setAttribute('style', `top:${window.innerHeight}px;`)

let slided = false;

hambarger[0].addEventListener('click', () => {
    // if (slided == false) {
        nav_right[0].classList.toggle('slide');
        // nav_right[0].setAttribute('style', 'top:0;');
        // slided = true;
        
    // } else if (slided == true) {
        

    //     // nav_right[0].remove
    //     // nav_right[0].classList.toggle('top');
    //     nav_right[0].setAttribute('style', 'top:-40rem;');
    //     slided = false;

    // }
})