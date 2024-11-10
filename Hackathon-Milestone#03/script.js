class ToggleDiv {
    private elements: NodeList;
    private excludeTags: string[] = ['H2', 'HR'];

    constructor(private classNames: string[]) {
        this.elements = document.querySelectorAll(this.classNames.map((className) => `.${className}`).join(', '));
        this.initEventListener();
    }

    private initEventListener(): void {
        this.elements.forEach((element: HTMLElement) => {
            const h2Elements = element.querySelectorAll('h2');
            h2Elements.forEach((h2: HTMLElement) => {
                h2.addEventListener('click', () => this.toggleVisibility(element));
                h2.style.cursor = 'pointer'; // Hand cursor on h2
            });
        });
    }

    private toggleVisibility(element: HTMLElement): void {
        Array.from(element.children).forEach((child: HTMLElement) => {
            if (!this.excludeTags.includes(child.tagName)) {
                child.style.display === "none"
               ? (child.style.display = "block")
                : (child.style.display = "none");
            }
        });
    }
}

new ToggleDiv(['objective', 'certification', 'Personal-Info', 'Education', 'Skill', 'project', 'technical-skills', 'environment']);

// Get form and resume container elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContainer = document.querySelector('.resume-container') as HTMLElement;

// Add event listener to generate resume button
document.getElementById('generate-resume')?.addEventListener('click', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Get values from form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const github = formData.get('github') as string;
    const degree = formData.get('degree') as string;
    const university = formData.get('university') as string;
    const graduationDate = formData.get('graduation-date') as string;
    const certification = formData.get('certification') as string;
    const objective = formData.get('objective') as string;
    const project1 = formData.get('project-1') as string;
    const project2 = formData.get('project-2') as string;
    const project3 = formData.get('project-3') as string;
    const technicalSkill1 = formData.get('technical-skill-1') as string;
    const technicalSkill2 = formData.get('technical-skill-2') as string;
    const technicalSkill3 = formData.get('technical-skill-3') as string;
    const environment1 = formData.get('environment-1') as string;
    const environment2 = formData.get('environment-2') as string;
    const environment3 = formData.get('environment-3') as string;

    // Update resume content
    document.getElementById('name')?.textContent = name;
    document.getElementById('email')?.textContent = email;
    document.getElementById('phone')?.textContent = phone;
    document.getElementById('linkedin')?.textContent = linkedin;
    document.getElementById('github')?.textContent = github;
    document.getElementById('degree')?.textContent = degree;
    document.getElementById('university')?.textContent = university;
    document.getElementById('graduation-date')?.textContent = graduationDate;
    document.getElementById('certification')?.textContent = certification;
    document.getElementById('objective')?.textContent = objective;

    const projectList = document.getElementById('project-list') as HTMLUListElement;
    projectList.innerHTML = '';
    const projectItems = [project1, project2, project3];
    projectItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        projectList.appendChild(li);
    });

    const technicalSkillsList = document.getElementById('technical-skills-list') as HTMLUListElement;
    technicalSkillsList.innerHTML = '';
    const technicalSkillsItems = [technicalSkill1, technicalSkill2, technicalSkill3];
    technicalSkillsItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        technicalSkillsList.appendChild(li);
    });

    const environmentList = document.getElementById('environment-list') as HTMLUListElement;
    environmentList.innerHTML = '';
    const environmentItems = [environment1, environment2, environment3];
    environmentItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        environmentList.appendChild(li);
    });
});