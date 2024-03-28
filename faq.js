const b1 = document.getElementById('but1');
const p = document.createElement('p');


function clear()
{
    p.textContent = "";
}
function show1()
{
    clear()
    const val = document.getElementById("faq1");
    p.textContent = "Frontend Mentor offers realistic coding challenges to help developers improve their  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
    val.appendChild(p);
    
}
function show2()
{
    clear()
    const val = document.getElementById("faq2");
    p.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
    val.appendChild(p);
}
function show3()
{
    clear()
    const val = document.getElementById("faq3");
    p.textContent = " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
    val.appendChild(p);
}
function show4()
{
    clear()
    const val = document.getElementById("faq4");
    p.textContent = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
    val.appendChild(p);
}