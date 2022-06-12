const items = document.getElementsByClassName("item");

/*** open close accordion ***/
[...items].forEach((item) =>
    item.addEventListener("click", (e) => {

        if (e.target.classList.contains("prime")) {
            item.children[0].classList.toggle("open-prime");
            item.children[1].classList.toggle("open-sub");
        }
    })
);

/*** carousel ***/
const rightArrows = document.getElementsByClassName("fa-arrow-right");
const leftArrows = document.getElementsByClassName("fa-arrow-left");
const imageEls = document.getElementsByClassName("img");

function arrows(elem, i, n) {
    elem[i].addEventListener("click", () => {
        [...imageEls].forEach((img) => {
            let matched = img.src.match(/\d/g);
            let num = Number(matched[matched.length - 1]);

            if (n > 0 && num === 4) num = 1;
            else if (n < 0 && num === 1) num = 4;
            else num = num + n;

            img.src = `./images/mountains_${num}.jpeg`;
        });
    });
}

arrows(leftArrows, 0, 1);
arrows(leftArrows, 1, 1);
arrows(rightArrows, 0, -1);
arrows(rightArrows, 1, -1);