AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Team Lead- Development",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Biofourmis",
    time: "(Aug, 21 - present)",
    desp: "<li>Core Backend Lead in Python for the company's flagship, Hospital@Home, responsible for product development</li> <li>Worked on technologies like Python, Flask, PostgresSQL, TimescaleDB, Jenkins, Kubernetes, Athena, S3, etc.</li> <li>Integrated various devices into the H@H program, including, Everion+, VitalsPatch, Omron BP, etc.</li><li>Worked on continuous ECG monitoring and vitals like HR, RR, SpO2, BP, temperatures, etc.</li>",
  },
  {
    title: "Director | CTO | Project Lead",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Lyzer Analytics",
    time: "(Sep, 20 - Jul, 21)",
    desp: "<li>Designed & Developed lyzer.io and ilinks.io- eCommerce Sales using Python, NumPy, Flask, LAMP Stack, Symfony, Linux, PimCore, etc.</li><li>Conceptualized and Designed Easy Returns Shopify App</li><li>Performed real-time integrations with various platforms like Shopify, Amazon, Walmart, Flipkart, Quickbooks, Vinculum, Facebook Feed, Google Analytics, Bing Ads, etc.</li><li>Used Flask to compute over 50+ business intelligence & forecasting data points for every product in real-time.</li><li>Optimized the computations by over 93% before caching</li>",
  },
  {
    title: "Full Stack Developer | Project Lead",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Prime Seller Hub",
    time: "(Jul, 18 - Jul, 21)",
    desp:"<li>Implemented PIM/MDM/DAM for the world's leading equestrian client using an open-source project, PimCore.</li><li>System stood as a backend for $5.4 million in direct sales and assisted $8 million of revenue yearly.</li><li>Contributed to the open-source program on Github by removing bugs and building new features.</li><li>Integrated our system with Shopify, Great Plains, Netsuite, Share-a-sale, Rakuten, etc. through REST APIs</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Sopra Steria",
    time: "(Jul, 17 - Jul, 18)",
    desp:"<li>Worked as SAP ABAP Developer.</li><li>Hands-on experience with core programming concepts and introduction to the best industry standards.</li><li>Worked with clients Airbus' Helicopter Division and Euromaster GmbH.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// // Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Digit-Meizu Appathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/uplift.png",
    desp: "Top 15 in All India Digit-Meizu Android Appathon and won 'Meizu M3 Note' Mobile",
  },
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
