var ToggleDiv = /** @class */ (function () {
    function ToggleDiv(classNames) {
        this.classNames = classNames;
        this.excludeTags = ['H2', 'HR'];
        this.elements = document.querySelectorAll(this.classNames.map(function (className) { return ".".concat(className); }).join(', '));
        this.initEventListener();
    }
    ToggleDiv.prototype.initEventListener = function () {
        var _this = this;
        this.elements.forEach(function (element) {
            var h2Elements = element.querySelectorAll('h2');
            h2Elements.forEach(function (h2) {
                h2.addEventListener('click', function () { return _this.toggleVisibility(element); });
                h2.style.cursor = 'pointer'; // Hand cursor on h2
            });
        });
    };
    ToggleDiv.prototype.toggleVisibility = function (element) {
        var _this = this;
        Array.from(element.children).forEach(function (child) {
            if (!_this.excludeTags.includes(child.tagName)) {
                child.style.display === "none"a
                    ? (child.style.display = "block")
                    : (child.style.display = "none");
            }
        });
    };
    return ToggleDiv;
}());
new ToggleDiv(['objective', 'certification', 'Personal-Info', 'Education', 'Skill', 'project', 'DotNet-Skills', 'DoNET-projects', 'environment', 'Pro-Experience']);
