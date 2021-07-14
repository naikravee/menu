// creating arrayobjects for the menu items data storing locally
const menuItems = [
    {
        id: 1,
        category: "lunch",
        title: "Noodles with Shrimps",
        price: 20.99,
        img: "images/noodles.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis sequi distinctio ipsam, hic repellat ad."
    },
    {
        id: 2,
        category: "dinner",
        title: "Vegan Salad bowl",
        price: 17.99,
        img: "images/vegan-salad-bowl.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, molestias sapiente atque sunt et illum."
    },
    {
        id: 3,
        category: "breakfast",
        title: "Pan cake with chocolate syrup",
        price: 13.99,
        img: "images/chocolate-pancake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, incidunt. Voluptatem laudantium voluptate inventore vel."
    },
    {
        id: 4,
        category: "breakfast",
        title: "Sandwich with boiled egg",
        price: 13.99,
        img: "images/egg-sandwich.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ad repudiandae eligendi sed sequi corrupti."
    },
    {
        id: 5,
        category: "dessert",
        title: "Strawberry Banana",
        price: 12.99,
        img: "images/strawberry-banana.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quidem fuga suscipit unde eum nisi rem eos aperiam nesciunt accusantium."
    },
    {
        id: 6,
        category: "breakfast",
        title: "Baked Pan cakes",
        price: 15.99,
        img: "images/pan-cake.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum pariatur repellat aspernatur. Voluptates a esse earum molestias."
    },
    {
        id: 7,
        category: "dinner",
        title: "Dumpling dishes",
        price: 25.99,
        img: "images/dumpling-dishes.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima animi repellendus cumque fugit velit earum nostrum blanditiis."
    },
    {
        id: 8,
        category: "dessert",
        title: "Purple Ice-pops",
        price: 13.99,
        img: "images/purple-ice-pops.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, accusantium! Dicta, consectetur qui."
    },
    {
        id: 9,
        category: "lunch",
        title: "Poached egg with vegetables",
        price: 22.99,
        img: "images/poached-egg.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quibusdam sed veritatis, Mollitia libero illo doloremque."
    },
    {
        id: 10,
        category: "dessert",
        title: "Raspberry Cake",
        price: 13.99,
        img: "images/raspberry-cake.jpg",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quibusdam sed veritatis, Dicta cumque Mollitia libero illo doloremque."
    }    
];

const menuContainer = document.querySelector(".menu-container");

const btnContainer = document.querySelector(".btn-container");



// add event listener for all teh menu items to be displayed when the document loads
window.addEventListener("DOMContentLoaded", function() {
    // passing the array to the function inorder to display the menu items
    displayMenuItems(menuItems);
    // create an array for category where categories will be added dynamically
    const categories = menuItems.reduce(function(values, item) {
        // console.log(values);
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    // console.log(categories);
    const categoryBtns = categories.map(function(category) {
        return `<button class="btn filter-btn" data-category=${category}>
        ${category}
        </button>`;
    }).join("");
    // console.log(categoryBtns);
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    // add event listener for the filter buttons listening for the click event
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
           // console.log(e.currentTarget.dataset.category);
           const category = e.currentTarget.dataset.category;

           // create a function to return the filtered menu items and store it in a     variable
           const menuCategory = menuItems.filter(function(menuItem) {
            // console.log(menuItem.category);
            if(menuItem.category === category) {
              return menuItem;
            }
        });

            // if all is selected call the functin to display all menu items else display as per selected category
            if(category === "all") {
             displayMenuItems(menuItems);
            }
            else {
                 displayMenuItems(menuCategory);
            }
        });
    });
});



// function to loop through all the array elements and display them dynamically
function displayMenuItems(menu) {
    // console.log(menuItems);
    let displayMenu = menu.map(function (items) {
        // console.log(items.price);

        return `<article class="menu-item">
        <img src=${items.img} alt=${items.title} class="photo">
    <div class="item-info">
        <header>
            <h4>${items.title}</h4>
            <h4 class="price">$${items.price}</h4>
        </header>
        <p class="item-text">
            ${items.desc}
        </p>
    </div>
</article>`
    });
    // use join() to join all the string into an html code returned from above function
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    menuContainer.innerHTML = displayMenu;
}