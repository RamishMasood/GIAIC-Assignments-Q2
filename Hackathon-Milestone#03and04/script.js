var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
function generateResume() {
    var _a;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var picture = (_a = document.getElementById('picture').files) === null || _a === void 0 ? void 0 : _a[0];
    var education = Array.prototype.map.call(document.querySelectorAll('#education-container textarea'), function (textarea) { return textarea.value; }).join('\n');
    var workExperience = Array.prototype.map.call(document.querySelectorAll('#work-experience-container textarea'), function (textarea) { return textarea.value; }).join('\n');
    var skills = Array.prototype.map.call(document.querySelectorAll('#skills-container textarea'), function (textarea) { return textarea.value; }).join('\n');
    var courses = Array.prototype.map.call(document.querySelectorAll('#courses-container textarea'), function (textarea) { return textarea.value; }).join('\n');
    document.getElementById('resume-name').innerText = name;
    document.getElementById('resume-email').innerText = "Email: ".concat(email);
    document.getElementById('resume-phone').innerText = "Phone: ".concat(phone);
    document.getElementById('education-details').innerText = education;
    document.getElementById('work-experience-details').innerText = workExperience;
    document.getElementById('skills-details').innerText = skills;
    document.getElementById('courses-details').innerText = courses;
    if (picture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById('resume-picture').src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(picture);
    }
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('resume-container').style.display = 'block';
}
function editResume() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('resume-container').style.display = 'none';
}
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section.previousElementSibling;
    if (section) {
        if (section.style.display === "none" || !section.style.display) {
            section.style.display = "block";
            button.innerHTML = "Hide";
        }
        else {
            section.style.display = "none";
            button.innerHTML = "Show";
        }
    }
}
function addMore(containerId) {
    var container = document.getElementById(containerId);
    var newTextarea = document.createElement('textarea');
    newTextarea.name = containerId;
    newTextarea.required = true;
    container.appendChild(newTextarea);
}
