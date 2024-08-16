import cakeImage from "./chocolate-cake.jpeg";
import brownieImage from "./chocolate-brownies.jpg";
import donutImage from "./chocolate-donut.jpg";
import iceCreamImage from "./chocolate-ice-cream.jpg";
import pieImage from "./chocolate-pie.jpg";
import cookieImage from "./chocolate-cookies.jpg";

const createElement = function(item) {
    const content = document.querySelector("#content");
    
    const image = document.createElement("img");
    image.src = item.image;
    content.appendChild(image);

    const name = document.createElement("h1");
    name.textContent = item.name;
    content.appendChild(name);

    const price = document.createElement("h1");
    price.textContent = item.price;
    content.appendChild(price);
}

export const menu = function() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    
    class MenuItem {
        constructor(image, name, price) {
            this._image = image;
            this._name = name;
            this._price = price;
        }

        get image() {
            return this._image;
        }

        get name() {
            return this._name;
        }

        get price() {
            return this._price;
        }
    }

    const menuItems = [];

    const cake = new MenuItem(cakeImage, 
                              "Chocolate Cake", 
                              "$2.00/slice");
    const brownies = new MenuItem(brownieImage, 
                                  "Chocolate Brownies", 
                                  "$1.00/brownie, $5.00/half-dozen, $8.00/dozen");
            
    const donuts = new MenuItem(donutImage, 
                                "Chocolate Donuts", 
                                "$2.00/donut, $10.00/half-dozen, $15.00/dozen");
    const iceCream = new MenuItem(iceCreamImage, 
                                  "Chocolate Ice Cream", 
                                  "$2.00/scoop");
    const pie = new MenuItem(pieImage,
                             "Chocolate Pie",
                             "$2.00/slice");
    const cookies = new MenuItem(cookieImage,
                                 "Chocolate Cookies",
                                 "$2.50/cookie, $12.00/half-dozen, $20.00/dozen");
    
    menuItems.push(cake, brownies, donuts, iceCream, pie, cookies);

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.appendChild(title);

    for (let i = 0; i < menuItems.length; i++) {
        createElement(menuItems[i]);
    }
}