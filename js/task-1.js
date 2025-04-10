// let categories = document.querySelector("#categories");
let categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
    let categoryName = category.querySelector("h2").textContent;
    let elementsNumb = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsNumb}`) 
}
