/* the first requirement which is creating numner of links equal to the number of the already created links using 
forEach
document.createElement();
getAttribute();
*/
let listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
    let link = document.createElement("a");
    console.log(item);
    link.href = item.getAttribute("data-id");
    item.appendChild(link);
    link.textContent = item.getAttribute("data-name");
});

/* the seconed requirement which is while scrolling the selected section is colered in the nav bar  
*/
window.addEventListener('scroll', event => {
    //here and first i added the event scroll 
    //then I declared a value for both values  navL and top  
    const navL = document.querySelectorAll('nav ul li a');
    //this illustrate and selected the link of the li of t he ul in the nav element in the html file for sure
    let top = window.scrollY;
   
    navL.forEach(link => {
      const section = document.querySelector(link.hash);
     
      if (section.offsetTop <= top &&section.offsetTop + section.offsetHeight > top) {
        link.classList.add('active');
      } 
      else {
        link.classList.remove('active');
      }
    });
  });