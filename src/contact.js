const addElement = function(tag, content, parent) {
    const elt = document.createElement(tag);
    elt.textContent = content;
    parent.append(elt);
}

export const contact = function() {
    const content = document.querySelector("#content");
    content.innerHTML = '';

    addElement("h1", "Contact Us", content);
    addElement("h2", "Zach's House of Chocolate", content);
    addElement("h3", "211 West Main Street", content);
    addElement("h3", "Thomasville, NC 27360", content);
    addElement("h3", "Email: jzlhoc@gmail.com", content);
    addElement("h3", "Phone: 336-491-8641", content);
}