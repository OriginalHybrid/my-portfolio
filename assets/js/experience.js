AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "AI Software Solutions Engineer",
    cardImage: "assets/images/experience-page/intel-logo.png",
    place: "Intel",
    time: "(July, 22 - present)",
    desp: "<p>Primary responsibility for this role involves developing and optimizing ML/DL libraries for the Intel OneAPI Analytics Toolkit and onboarding customer use cases on Intel AI Analytics Platform. The role also includes overseeing customer outreach campaigns, including training & workshops, and providing high touch support to enable successful use of Intel's AI solutions.</p><br><div style='font-size:13.5px'><li>Optimized TensorFlow models for FP32 and BF16 using Intel's Neural Compressor to run efficiently on Intel's CPU and GPU processors, resulting in a 30-40% reduction in inference time through model quantization. </li><li>Working on L4/L5 support tickets for customers on Pytorch & TensorFlow.<li>Successfully delivered 2 trainings sessions and POCs for customers demonstrating performance and efficiency improvement using Intel OneAPI toolkits.</li></div>",
  },
  {
    title: "Advanced Application Sr Analyst | Sr Data Scientist",
    cardImage: "assets/images/experience-page/accenture-logo 2.png",
    place: "Accenture - AGBG",
    time: "(Jan, 21 - July, 22)",
    desp: "<p>As a member of AGBG team, I worked on the AIVI platform to build and integrate AI solutions with cloud & edge devices like Google Coral TPU for automation and inspection use cases. Implemented Google's Visual Inspection AI Solution (Assembly & Cosmetic Inspection, AutoML Video Object Tracking) including custom deep learning models. Defined technical architecture and developed end-to-end solutions for client use cases. In my role as SME, I helped onboard clients to adopt the technology.</p><br><div style='font-size:13.5px'><li>Implemented Deep Learning Models like CNN/ Resnet50V2, Faster RCNN to detect and track objects in video streams and recognize user- defined defect instances in images with around 60% less inference time on Edge & IoT Core.</li><li>Applied image pre-processing and augmentation using custom python scripts with successfully achieving over 90% accuracy from less than 200 images.</li><li>Created over 5 MVPs, such as AI Worker Tracker, AIVI Utility Pole Inspection, Shelf Stock Monitoring, etc.</li><li>MLOPS: Deployed model containers on Google Kubernetes Engine and performed EDA on supply chain logistics and demand forecasting use cases. Coded backend Restful APIs in Flask and Django.</li></div>",
  },
  {
    title: "Advanced Application Analyst | Data Engineer",
    cardImage: "assets/images/experience-page/accenture-logo 2.png",
    place: "Accenture - AGBG",
    time: "(March, 20 - Dec, 20)",
    desp: "<p>Primary Responsibility includes building AI applications along with data ingestion pipelines. Proficient use of Google Cloud Platform especially in cloud services such as Big Query, Pub/Sub, Dataflow, DataProc, GKE. Performed EDA and Data Visualization to present meaning result to stakeholders.</p><br><div style='font-size:13.5px'><li>Collaborated on Google's Cloud Smart Solution Data Engine with the goal of simplifying integration of Digital Twin Solution along with ingestion, processing, and storing of data in GCP for smart analytics.</li><li>Built ELT ingestion pipelines using Pub/Sub and Dataflow, and reducing processing times by 40%</li><li>Built Anomaly Detection models on ingested Data using BQML/ LSTMs and Logistic regression techniques</li><li>Integrated Looker Dashboards for monitoring and data analysis. Also coordinated with management on client proposals, planning project pipeline, architecture design, effort, and cost estimations.</li></div>",
  },
  {
    title: "Advanced Application Analyst | Blockchain Developer",
    cardImage: "assets/images/experience-page/accenture-logo 2.png",
    place: "Accenture - Blockchain Capability",
    time: "(Sep, 18 - March, 20)",
    desp: "<p>Primary Responsibility includes building smart Blockchain DLT solutions. Research and implement new DLT frameworks for client use cases. Take ownership for a DLT frameworks for complete end to end project lifecycle.</p><br><div style='font-size:13.5px'><li>Launched an open-source project under Hyperledger Labs, Linux Foundation and deployed the production-ready DLT platforms in under 30 mins</li><li>Involved in working on Docker, Ansible, Kubernetes and Helm Charts and automating various DLT Platforms like Hyperledger Fabric, Hyperledger Indy, Quorum with their end-to-end deployment using Ansible and Jenkins Pipeline</li><li>Upgraded the Bevel platform for Hyperledger Fabric from version 1.4.4 to 2.2.0, implemented the new Chaincode Lifecycle 2.0 with support for Java, and wrote Molecule scripts for testing ansible roles. Also organized enablement sessions and a Hackathon event on Hyperledger Bevel and distributed ledger technologies (DLT).</li></div>",
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
    title: "Hyperledger Bevel",
    subtitle: "Open Source Contributer",
    image: "assets/images/experience-page/bevel.jpg",
    desp: "Open Source Contribution in field of Blockchain Technologies. Active Participation in Development of Hyperledger Bevel",
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
          <a href="https://github.com/hyperledger/bevel" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
