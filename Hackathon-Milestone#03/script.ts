class DynamicResume {
  constructor() {
      this.initForm();
      this.initResume();
  }

  initForm() {
      const form = document.getElementById('resumeForm');
      form.addEventListener('submit', this.handleFormSubmit.bind(this));

      // Event listeners for dynamic inputs
      document.getElementById('addEducation')?.addEventListener('click', this.addEducationInput.bind(this));
      document.getElementById('addCertification')?.addEventListener('click', this.addCertificationInput.bind(this));
      document.getElementById('addProject')?.addEventListener('click', this.addProjectInput.bind(this));
      document.getElementById('addSkill')?.addEventListener('click', this.addSkillInput.bind(this));
      document.getElementById('addEnvironment')?.addEventListener('click', this.addEnvironmentInput.bind(this));
  }

  addEducationInput() {
      const inputDiv = document.createElement('div');
      inputDiv.innerHTML = `
          <input type="text" placeholder="Degree">
          <input type="text" placeholder="University">
          <input type="text" placeholder="Year Range">
          <button type="button" class="remove-button">Remove</button>
      `;
      document.getElementById('educationInputs')?.appendChild(inputDiv);

      const removeButton = inputDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
          inputDiv.remove();
      });
  }

  addCertificationInput() {
      const inputDiv = document.createElement('div');
      inputDiv.innerHTML = `
          <input type="text" placeholder="Certification Name">
          <button type="button" class="remove-button">Remove</button>
      `;
      document.getElementById('certificationInputs')?.appendChild(inputDiv);

      const removeButton = inputDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
          inputDiv.remove();
      });
  }

  addProjectInput() {
      const inputDiv = document.createElement('div');
      inputDiv.innerHTML = `
          <input type="text" placeholder="Project Name">
          <input type="text" placeholder="Description">
          <button type="button" class="remove-button">Remove</button>
      `;
      document.getElementById('projectInputs')?.appendChild(inputDiv);

      const removeButton = inputDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
          inputDiv.remove();
      });
  }

  addSkillInput() {
      const skillInput = document.createElement('input');
      skillInput.type = 'text';
      skillInput.placeholder = 'Skill';
      document.getElementById('skillInput')?.appendChild(skillInput);
  }

  addEnvironmentInput() {
      const inputDiv = document.createElement('div');
      inputDiv.innerHTML = `
          <input type="text" placeholder="Environment">
          <button type="button" class="remove-button">Remove</button>
      `;
      document.getElementById('environmentInputs')?.appendChild(inputDiv);

      const removeButton = inputDiv.querySelector('.remove-button');
      removeButton.addEventListener('click', () => {
          inputDiv.remove();
      });
  }

  initResume() {
      const resumeElements = document.querySelectorAll('.Left-side h2, .Right-side h2');
      resumeElements.forEach(element => {
          element.addEventListener('click', this.toggleVisibility.bind(this));
      });
  }

  handleFormSubmit(event) {
      event.preventDefault();
      this.populateResume();
      this.toggleForm();
  }

  populateResume() {
      const formData = new FormData(document.getElementById('resumeForm'));

      // Populate personal info
      document.getElementById('name')?.textContent = formData.get('nameInput');
      document.getElementById('phone')?.textContent = formData.get('phoneInput');
      document.getElementById('email')?.textContent = formData.get('emailInput');
      document.getElementById('linkedin')?.textContent = formData.get('linkedinInput');
      document.getElementById('behance')?.textContent = formData.get('behanceInput');
      document.getElementById('github')?.textContent = formData.get('githubInput');
      document.getElementById('nameHeader')?.textContent = formData.get('nameInput');
      document.getElementById('profession')?.textContent = formData.get('professionInput');

      // Populate education and certification lists
      this.populateEducationList(formData);
      this.populateCertificationList(formData);

      // Populate other sections
      document.getElementById('objectiveText')?.textContent = formData.get('objectiveInput');
      this.populateProjectList(formData);
      this.populateSkillList(formData);
      this.populateEnvironmentList(formData);
  }

  populateEducationList(formData) {
      const educationList = document.getElementById('educationList');
      educationList.innerHTML = ''; // Clear previous content

      const educationInputs = document.querySelectorAll('#educationInputs input');
      educationInputs.forEach(input => {
          if (input.value) {
              const degree = input.previousElementSibling?.value;
              const university = input.previousElementSibling?.previousElementSibling?.value;
              const yearRange = input.previousElementSibling?.previousElementSibling?.previousElementSibling?.value;
              const listItem = document.createElement('p');
              listItem.textContent = `${degree} - ${university} (${yearRange})`;
              educationList.appendChild(listItem);
          }
      });
  }

  populateCertificationList(formData) {
      const certificationList = document.getElementById('certificationList');
      certificationList.innerHTML = ''; // Clear previous content

      const certificationInputs = document.querySelectorAll('#certificationInputs input');
      certificationInputs.forEach(input => {
          if (input.value) {
              const certificationName = input.value;
              const listItem = document.createElement('li');
              listItem.textContent = certificationName;
              certificationList.appendChild(listItem);
          }
      });
  }

  populateProjectList(formData) {
      const projectList = document.getElementById('projectList');
      projectList.innerHTML = ''; // Clear previous content

      const projectInputs = document.querySelectorAll('#projectInputs input');
      projectInputs.forEach(input => {
          if (input.value) {
              const projectName = input.previousElementSibling?.value;
              const description = input.previousElementSibling?.previousElementSibling?.value;
              const listItem = document.createElement('li');
              listItem.textContent = `${projectName}: ${description}`;
              projectList.appendChild(listItem);
          }
      });
  }

  populateSkillList(formData) {
      const skillList = document.getElementById('skillList');
      skillList.innerHTML = ''; // Clear previous content

      const skillInputs = document.querySelectorAll('#skillInput input');
      skillInputs.forEach(input => {
          if (input.value) {
              const skill = input.value;
              const listItem = document.createElement('li');
              listItem.textContent = skill;
              skillList.appendChild(listItem);
          }
      });
  }

  populateEnvironmentList(formData) {
      const environmentList = document.getElementById('environmentList');
      environmentList.innerHTML = ''; // Clear previous content

      const environmentInputs = document.querySelectorAll('#environmentInputs input');
      environmentInputs.forEach(input => {
          if (input.value) {
              const environment = input.value;
              const listItem = document.createElement('li');
              listItem.textContent = environment;
              environmentList.appendChild(listItem);
          }
      });
  }

  toggleForm() {
      const form = document.getElementById('resumeForm');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }

  toggleVisibility(event) {
      const element = event.target.parentElement;
      Array.from(element.children).forEach(child => {
          if (child.tagName !== 'H2' && child.tagName !== 'HR') {
              child.style.display = child.style.display === 'none' ? 'block' : 'none';
          }
      });
  }
}

new DynamicResume();