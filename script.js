const closeOpenItems = () => {
    const openHeading = document.getElementsByClassName("heading open");
    if (openHeading.length !== 0){
        openHeading[0].classList.toggle("open");
        const openItems = document.getElementsByClassName("item-container open");
        const openItem = openItems[0];
        openItem.classList.toggle("open");
        openItem.style.maxHeight = 0 + "px";
        }           
}

function Heading(index) {
    this.heading = document.getElementById("heading"+index);
    this.item = document.getElementById("item"+index);
    this.activate = () => {
        if (this.heading.classList.contains("open")) {
            closeOpenItems();
            return;
        } else {
            closeOpenItems();    
            this.heading.classList.toggle("open");
            this.item.classList.toggle("open");
            this.item.style.maxHeight = this.item.scrollHeight + "px";
        }
    }
    this.listener = () => {
        this.heading.addEventListener("click", this.activate);
    };
}

const numberOfHeadings = document.getElementsByClassName("heading").length;
for(let i=1; i<=numberOfHeadings; i++){
    const heading = new Heading(i);
    heading.listener(); 
}       