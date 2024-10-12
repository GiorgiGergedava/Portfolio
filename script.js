
// import

import { typed } from './js/typing.js';

import { form} from './js/formm.js';


// import end

// npm
axios.get('http://localhost:3000/posts')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    
// server
function getUsers() {
    fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        {
            method: "GET",
        }
    )
        .then(function (response) {
            if (response.status !== 200) {
                throw "ERROR";
            }
            return response.json();
        })

        .then(function (dataInfo) {



            function setSlide() {

                mainContent.innerHTML = '';

                const slideItem = divtag();
                const imgItem = imgTag(dataInfo[sliderIndex]);
                const titleItem = titleTag(dataInfo[sliderIndex]);

                slideItem.appendChild(titleItem);
                slideItem.appendChild(imgItem);

                mainContent.appendChild(slideItem);


            }
            setSlide();

        })

        .catch(function (error) {

        });


}

getUsers();



// carusel
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });



// scroll bar
let preogressbar = document.getElementById("preogressbar")
let percent = document.getElementById("percent")

let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    letprogress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}
// cookies
const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
        exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        exdate.toUTCString() +
        ";path=" +
        (path || "/") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure" : "");
};












