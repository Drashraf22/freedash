let toggleBtns = document.querySelectorAll(".toggle-btn i");

toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        toggleBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("themeBtn", e.currentTarget.dataset.star)
        if (btn.classList.contains("light")) {
            document.body.classList.remove("dark-mode");
            window.localStorage.setItem("theme", "light")
        } else {
            document.body.classList.add("dark-mode");
            window.localStorage.setItem("theme", "moon")
        }
    })
})


/*************************************** animation processing bar*****************************************/
let number1 = document.getElementById("number-1"),
    number2 = document.getElementById("number-2"),
    number3 = document.getElementById("number-3");
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

setInterval(() => {
    if (counter1 === 81) {
        clearInterval();
    } else {
            counter1++;
            number1.innerHTML = `${counter1} %`
        }
    }, 23);
    setInterval(() => {
        if (counter2 === 62) {
            clearInterval();
        } else {
            counter2++;
            number2.innerHTML = `${counter2} %`
        }
    }, 28);
    setInterval(() => {
        if (counter3 === 44) {
            clearInterval();
        } else {
            counter3++;
            number3.innerHTML = `${counter3} %`
        }
    }, 40);
/*************************************** animation processing bar*****************************************/
/*************************************** Aside section*****************************************/
let bar = document.getElementById('bar');
let asideSection = document.querySelector('aside');
let xmarkBtn = document.querySelector('.xmark-btn');

bar.addEventListener('click', () => {
    asideSection.classList.toggle('open');
})
xmarkBtn.addEventListener('click', () => {
    asideSection.classList.remove('open');
})
window.addEventListener('scroll', () => {
    asideSection.classList.remove('open');
})
/*************************************** Aside section*****************************************/
/*************************************** Header section*****************************************/
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (this.scrollY >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})
/*************************************** Header section*****************************************/
/*************************************** Start changeColor Section*****************************************/
let gearBtn = document.getElementById('gear'),
    changeColor = document.querySelector('.changeColor'),
    colors = document.querySelectorAll('.colors span');

gearBtn.addEventListener('click', () => {
    changeColor.classList.toggle("appear");
})
window.addEventListener('scroll', () => {
    changeColor.classList.remove("appear");
})

colors.forEach(color => {
    color.addEventListener('click', (e) => {
        colors.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("spanI", e.currentTarget.dataset.color);
        let changeFace;
        if (color.classList.contains("color-1")) {
            changeFace = "#ff7782";
        }
        if (color.classList.contains("color-2")) {
            changeFace = "#41f1b6";
        }
        if (color.classList.contains("color-3")) {
            changeFace = "#ffbb55";
        }
        if (color.classList.contains("color-4")) {
            changeFace = "#7380ec";
        }

        document.querySelector(':root').style.setProperty("--color-danger", changeFace);
        window.localStorage.setItem("siteColor", changeFace);
    })
})

function showData() {
    if (window.localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
    toggleBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-star = ${window.localStorage.getItem("themeBtn")}]`).classList.add("active");
    document.querySelector(':root').style.setProperty("--color-danger", window.localStorage.getItem("siteColor"));
    colors.forEach(c => c.classList.remove('active'));
    document.querySelector(`[data-color = ${window.localStorage.getItem('spanI')}]`).classList.add("active");

}

showData();

/*************************************** End changeColor Section*****************************************/
