/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Pneumonia Detection (2021)",
        description : "Tensorflow Model built using NIH Dataset for detecting Pneumonia from chest Xrays. Used Transfer Learning using ResNET, VGG16. Achieved over 83% accuracy.",
        technologies : "Technologies Used: Python, Numpy, Tensorflow",
        image : "assets/images/research-page/pneumonia.png",
        link: "https://github.com/OriginalHybrid/Pneumonia-Detection",
    },
    {
        title : "Project Alina  (2020)",
        description : "Developed a ChatBot using Generative seq2seq LSTM model",
        technologies : "Technologies Used: Python, Numpy, Tensorflow, Keras",
        image : "assets/images/research-page/chatbot.jpg",
        link: "This is currently left empty and this can be considered as a dummy data 1",
    },
    {
        title : "Auto Car (2020)",
        description : "Created an autonomous Self Driving Car Model.",
        technologies : "Technologies Used: Python, Numpy, Tensorflow, Computer Vision",
        image : "assets/images/research-page/car.png",
        link: "https://github.com/OriginalHybrid/self-driving-car",
    },
    {
        title : "Continuous pulse rate estimation (2021)",
        description : " Develop a Pulse Rate Algorithm on the given training data. Then apply the Pulse Rate Algorithm on a Clinical Application and compute more clinically meaningful features and discoverd healthcare trends.",
        technologies : "Technologies Used: Python, Numpy, Tensorflow",
        image : "assets/images/research-page/pulse.jpg",
        link: "https://github.com/OriginalHybrid/Motion-Compensated-Pulse-Rate-Estimation",
    },
    {
        title : "Ashes - A multiplayer FPS game",
        description : "A multiplayer FPS game with 3 maps developed using Unity gaming engine",
        technologies : "Technologies Used: unity",
        image : "assets/images/research-page/Jump.png",
        link: "This is currently left empty and this can be considered as a dummy data 1",
    },

    
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, description, technologies, link}) =>
        (output +=`
            <tr data-aos="zoom-in-left" >
            <div> 
                <td class="imgCol" ><img src="${image}" class="rImg"  style="height: 200px; width:200px"></td>
                <div>
                <td class = "researchTitleName">
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class="rConferences"> ${description}</div> 
                    <div class="rConferences" style="padding-bottom: 40px;">${technologies}</div>
                    <div href=${link} class="button button-accent button-small text-right button-abstract ">Link</div>    
   
                </td>
                </div>
            </div>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

