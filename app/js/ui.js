const showSIForm = document.getElementById('showSIForm');
const showSUForm = document.getElementById('showSUForm');

showSIForm.addEventListener('click', ()=>{
    const signUpContainer = document.querySelector('.signUpContainer');
    const signInContainer = document.querySelector('.signInContainer');

    signUpContainer.classList.remove("showSection");
    signUpContainer.classList.add("hideSection");

    signInContainer.classList.remove("hideSection");
    signInContainer.classList.add("showSection");
});

showSUForm.addEventListener('click', ()=>{
    const signUpContainer = document.querySelector('.signUpContainer');
    const signInContainer = document.querySelector('.signInContainer');

    signInContainer.classList.remove("showSection");
    signInContainer.classList.add("hideSection");

    signUpContainer.classList.remove("hideSection");
    signUpContainer.classList.add("showSection");
});