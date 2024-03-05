let data = [
    {
        "img": "./image/01.jpeg",
        "des": "Customer Support"
    }, {
        "img": "./image/02.jpeg",
        "des":"Chamber Services"
    },
    {
        "img": "./image/03.jpeg",
        "des":"Online Specialist"
    },
    {
        "img": "./image/04.jpeg",
        "des":"Privacy and Security"
    }
]
let container = document.getElementById("container")
function customer (value) {
    value.map((item) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = item.img;
        let name = document.createElement("p");
        name.innerText = item.des;
        div.append(img, name);
        container.append(div)
    })
}
customer(data)



let specialData = [
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn":"READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
    {
        "img": "./image/neurology.png",
        "title": "Neurolog",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
        "btn": "READ MORE"
    },
]
let special = document.getElementById("specail_list_box")
function speciallist (data) {
    console.log(data);
    data.map((item) => {
        let div = document.createElement("div");
        let img_div = document.createElement("div")
        img_div.classList.add("img_card")
        let img = document.createElement("img");
        img.src = item.img;
        let title = document.createElement("h3");
        title.innerText = item.title;
        let desc = document.createElement("p")
        desc.innerText = item.desc;
        let btn = document.createElement("p")
        btn.innerText = item.btn;

        img_div.append(img, title);
        div.append(img_div,desc,btn)
        special.append(div)

    })
}
speciallist(specialData)



let top_special = [
    {
        "img": "./image/about1.png",
        "star": "5.0",
        "name": "Dr. Travis Oman",
        "special": "Opthalmologist",
        "btn": "Book Now",
        "review":"120 Reviews"
    },
    {
        "img": "./image/covid-19-hero-figure-img.png",
        "star": "5.0",
        "name": "Dr. Annah Ray",
        "special": "Dentician",
        "btn": "Book Now",
        "review": "120 Reviews"
    },
    {
        "img": "./image/team2.png",
        "star": "5.0",
        "name": "Dr. Richard Brook",
        "special": "Gastroenterlogist",
        "btn": "Book Now",
        "review": "120 Reviews"
    },
    {
        "img": "./image/team3.png",
        "star": "5.0",
        "name": "Dr. Vivian Monroe",
        "special": "Pediatry Surgeon",
        "btn": "Book Now",
        "review": "120 Reviews"
    },
]

let speciallist1 = document.getElementById("top_special");
function displayData (data1) {
    data1.map((item) => {
        let div = document.createElement("div");
        let img_div = document.createElement("div");
        let img = document.createElement("img")
        img.src = item.img;
        let star = document.createElement("p")
        star.innerText = item.star;
        let name = document.createElement("h4")
        name.innerText = item.name;
        let special = document.createElement("p")
        special.innerText = item.special;
        let btn = document.createElement("button")
        btn.innerText = item.btn;
        let review = document.createElement("h5")
        review.innerText = item.review
        img_div.append(img, star);
        div.append(img_div, name, special, btn, review);
        speciallist1.append(div)
})
}

displayData(top_special)