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
  new ToggleDiv(['objective', 'certification', 'Personal-Info', 'Education' ,'Skill','project','DotNet-Skills','DoNET-projects','environment','Pro-Experience']);