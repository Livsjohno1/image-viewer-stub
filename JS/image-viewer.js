// get a DOM refernce to the main image
let heroImage = document.getElementById("hero-image");
// Get DOM ref to the collection of menu items
let links = document.getElementsByClassName("menu-item");
// set the initial selection index
let selectedIndex = 2;
// load the initial image into heroImage
heroImage.src = links[selectedIndex].dataset.image;
// listen to transition end
heroImage.ontransitionend = onTransitionEnd;
// loop through all of the menu items
for (let i = 0; i < links.length; i++) {
    // assign the click handler for each
    links[i].onclick = handleClick;
}
// click handler
function handleClick(event) {
    // get the index for the clicked event
    // console.log(event.currentTarget);
    //  heroImage.src = event.currentTarget.dataset.image;
    let newIndex = returnItemIndex(links, event.currentTarget);
    // if the index is different from the existing selection
    if (newIndex != selectedIndex) {
        selectedIndex = newIndex;
        // fade out the heroImage (requires CSS transition)
        heroImage.style.opacity = 0;
    }
}
// handle end of transition
function onTransitionEnd(){
    // update on heroImage with the newly selected image
    // dataset.image is how we access the custom HTML attribute 'data-image'
    // console.log("transition ended")
    heroImage.src = links[selectedIndex].dataset.image;
    // revert the opacity of the heroImage to make it visible
    heroImage.style.opacity =1;
}
// find the index of an item in a given collection
function returnItemIndex(collection, item) {
    // loop through the collection
    for (let i = 0; i < collection.length; i++) {
        // if the current item == the item we are looking for
        // the loop will only tun until the index is found
        if (collection[i] == item) {
            // pass back index of found item
            return i;
        }
    }
    // if the item was not found, the next line will execute 
    console.error("cannot find item in collection")
}