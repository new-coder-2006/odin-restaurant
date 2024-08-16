import cakeImage from "./cake.jpg";

export const home = function() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    
    const image = document.createElement("img");
    image.src = cakeImage;
    content.insertBefore(image, content.firstChild);
    
    const name = document.createElement("h1");
    name.textContent = "Zach's House of Chocolate";
    content.appendChild(name);
    

    const description = document.createElement("p");
    description.textContent = "Welcome to Zach's House of Chocolate, where indulgence meets \
            imagination! Our passion for crafting exquisite chocolate creations \
            shines through in every bite, whether you're savoring a decadent \
            dessert, enjoying a handcrafted truffle, or exploring our unique \
            chocolate-infused dishes. At Zach's, we believe chocolate is more \
            than just a treat—it's an experience. Join us in a warm, inviting \
            atmosphere that celebrates the art of chocolate and the joy it brings \
            to every moment. Come, treat yourself to something extraordinary!"
    content.appendChild(description);
}