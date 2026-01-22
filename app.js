function search() {
    let input = document.querySelector(".search-input").value.toLowerCase();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
};
/*------------------------------------login----------------------------------------------*/

const sidebarNavigationEl = document.getElementById("sidear-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nev-sidebar");
const sidebarCloseNavigationEl = document.getElementById("close");  



sidebarOpenNavigationEl.addEventListener("click",()=>{
   sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click",()=>{
  sidebarNavigationEl.classList.toggle("slidebar-show"); 
});


/*----------------------------card--------------------------------------------*/
const cardNavigationEl = document.getElementById("card-navigation-id");
const cardOpenNavigationEl = document.getElementById("open-ne-sidebar");
const cardCloseNavigation = document.getElementById("close2");

cardOpenNavigationEl.addEventListener("click",()=>{
    cardNavigationEl.classList.toggle("slidebar-show");
 });
    cardCloseNavigation .addEventListener("click",()=>{
        cardNavigationEl.classList.toggle("slidebar-show");
   
});

/*in the card upi add code*/
const radioButtons = document.querySelectorAll('input[name="one"]');
const upiInputBox = document.getElementById('upi-input-id');
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        
        if (this.id === 'upi-radio-btn') {
            upiInputBox.style.display = 'flex'; 
        } else {
            upiInputBox.style.display = 'none';
        }
    });
});

/*-------------customer service box opening--------------*/
const customerNavigationEl = document.getElementById("customerBtn-id");
const customerOpenBox = document.getElementById("customer-option-id")



customerNavigationEl.addEventListener("click",function(){
 customerOpenBox.classList.toggle("active");
});


/*----------------customer care box opening-------------*/
const customerCareEl = document.getElementById("customer-care-id");
const customerCareOpenBox = document.getElementById("customer-option-id2"); 


customerCareEl.addEventListener("click",function(){
    customerCareOpenBox.classList.toggle("active");
});


/*-----------------more-products--------------*/
const phoneNavigationEl = document.getElementById("phone-id");
const phoneBoxOpenEl = document.getElementById("phones-box-id");
const textOpeningEl = document.getElementById("phone-text-id");

phoneNavigationEl.addEventListener("click",()=>{
    phoneBoxOpenEl.classList.toggle("phone-show-box");
});

textOpeningEl.addEventListener("click",()=>{
    phoneBoxOpenEl.classList.toggle("phone-show-box");
});