const  submitBtn= document.getElementById("submitBtn");

submitBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
});

const toggleSkills = document.getElementById("toggleSkills");
toggleSkills.addEventListener("click", function () {
    skillsSection.classList.toggle("hidden");
    toggleSkills.textContent = skillsSection.classList.contains("hidden")
        ? "Show"
        : "Hide";
});

submitBtn.addEventListener("click",function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name===""||email===""){
    alert("Please fill in all required fields.");
    } else{
    alert("Form submitted successfully!");
    }
    });
        
