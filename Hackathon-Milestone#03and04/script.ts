document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    generateResume();
});

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const picture = (document.getElementById('picture') as HTMLInputElement).files?.[0];
    const education = Array.prototype.map.call(document.querySelectorAll('#education-container textarea'), (textarea: HTMLTextAreaElement) => textarea.value).join('\n');
    const workExperience = Array.prototype.map.call(document.querySelectorAll('#work-experience-container textarea'), (textarea: HTMLTextAreaElement) => textarea.value).join('\n');
    const skills = Array.prototype.map.call(document.querySelectorAll('#skills-container textarea'), (textarea: HTMLTextAreaElement) => textarea.value).join('\n');
    const courses = Array.prototype.map.call(document.querySelectorAll('#courses-container textarea'), (textarea: HTMLTextAreaElement) => textarea.value).join('\n');

    (document.getElementById('resume-name') as HTMLElement).innerText = name;
    (document.getElementById('resume-email') as HTMLElement).innerText = `Email: ${email}`;
    (document.getElementById('resume-phone') as HTMLElement).innerText = `Phone: ${phone}`;
    (document.getElementById('education-details') as HTMLElement).innerText = education;
    (document.getElementById('work-experience-details') as HTMLElement).innerText = workExperience;
    (document.getElementById('skills-details') as HTMLElement).innerText = skills;
    (document.getElementById('courses-details') as HTMLElement).innerText = courses;

    if (picture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            (document.getElementById('resume-picture') as HTMLImageElement).src = e.target?.result as string;
        };
        reader.readAsDataURL(picture);
    }

    document.getElementById('form-container')!.style.display = 'none';
    document.getElementById('resume-container')!.style.display = 'block';
}

function editResume(): void {
    document.getElementById('form-container')!.style.display = 'block';
    document.getElementById('resume-container')!.style.display = 'none';
}

function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId) as HTMLElement;
    const button = section.previousElementSibling as HTMLButtonElement;
    if (section) {
        if (section.style.display === "none" || !section.style.display) {
            section.style.display = "block";
            button.innerHTML = "Hide";
        } else {
            section.style.display = "none";
            button.innerHTML = "Show";
        }
    }
}

function addMore(containerId: string): void {
    const container = document.getElementById(containerId) as HTMLElement;
    const newTextarea = document.createElement('textarea');
    newTextarea.name = containerId;
    newTextarea.required = true;
    container.appendChild(newTextarea);
}
