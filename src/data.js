import myImage from './assets/mountainPic.jpg';
import abcIOSHomeScreenPic from './assets/abciOSHomeScreen.jpg';
import abcWebPagePic from './assets/ABCHomePage.png';
//each object needs
/*
{
    title:"SomeTitle",
    infoSections: [
        {
            title:"Past Work"
            image:"path/to/image",
            infoText:"Work Experience"
            listInfo:some html content
        }
    ]
}
*/
 const skillItems = [
    {
    text:"Java",
    image:""
    },
    {text:"Javascript",
    image:""},
    {text:"React",
    image:""},
    {text:"Swift",
    image:""},
    {text:"HTML",
    image:""},
    {text:"CSS",
    image:""},
    {text:"HTTP",
    image:""},
    {text:"Git",
    image:""},
    {text:"Spring",
    image:""},
    {text:"Thymeleaf",
    image:""},
    {text:"REST",
    image:""},
    {text:"Bash",
    image:""},

  ];

const abcListItems = [
    {text:"Implementing features and bigger projects in our Member Services Web Application and iOS App",
        image:"" 
    },
    {text:"Collaborating with Business Analysts and the Digital Experience team to ensure appropriate solutions are being implemented and meeting the business expectations",
    image:""},
    {text:"Attend daily scrum meetings where each team member discusses their current work and challenges to ensure we deliver for the monthly release",
    image:""}
];

const uOfAItems = [
    {
        text:"Teamwork and communication with Dr. Frishkopf and others to create a soundwalk for the new islamic garden in the Devonian Gardens",
        image:"",
    },
    {
        text:"Used javascript and Web Audio API to create an audio layer on top of the real-world Islamic garden ",
        image:""
    },
    {
        text:"Deployed a backend using Flask and MySql to serve pages and create an API for the sounds to be delivered based on GPS coordinates of the user",
        image:""
    }
];

const guitarItems = [
    {
        text:"Assessing the skill of the student during the lesson and deciding what is the next step for their progress",
        image:""
    },
    {
        text:"Handled scheduling and rescheduling of lessons for all my students",
        image:""
    },
    {
        text:"fufilled the student's request of learning a specific song if I thought their skills level was enough to learn the song. ",
        image:""
    }
];

const websiteItems = [
    {
        text:"I created reusable react components and structured it in a way where I can use it for other one page sites in the future.",
        image:""
    },
    {
        text:"I organized my code in such a way that I can move the data to a DB and the retrieval of JSON data would be used with just adding the api call.",
        image:""
    },
];

const abcWebsiteItems = [
    {
        text:"Migrated functionality from the old Oracle ADF based project to a Spring project",
        image:""
    },
    {
        text:"Delivering large pieces of functionality to the project manager and meeting project deadlines. ",
        image:""
    },
    {
        text:"Creating reusable Thymeleaf fragments to keep consistency of components across the application",
        image:""
    },
    {
        text:"Implementing data access objects and data transfer objects to retrieve data from the PL/SQL back end",
        image:""
    }
];

const iOSAppItems = [
    {
        text:"Delivered project components to the project manager while meeting deadlines.",
        image:""
    },
    {
        text:"Completing peer reviews that are assigned to me so that I can approve the changes going into the project",
        image:""
    },
    {
        text:"Design UI screens  in xcode and swift while collaborating with the DX team to match the mock ups and the business requirements.",
        image:""
    }
];

const trackerAppItems = [
    {
        text:"Used MVC design pattern and test driven development in a group to create an expense tracker app on android where a user can track their expenses on a business trip for example.",
        image:""
    },
    {
        text:"Responsible for assuring the statuses of the claims worked according to the specifications and making appropriate tests.",
        image:""
    },
    {
        text:"Technologies Used: Java, Android SDK, Eclipse, Git",
        image:""
    }
];

const p2pItems = [
    {
        text:"Created a P2P blogging service in a group class project. ",
        image:""
    },
    {
        text:"Responsible for front end which included ajax requests to our REST api and other peers’ api",
        image:""
    },
    {
        text:"Utilized authorization tokens in the http headers.",
        image:""
    },
    {
        text:"Technologies used: HTTP, Javascript, JQuery, CSS, HTML , Angular , REST, Django, Git, JSON",
        image:""
    }
];

const resumeData = [
    {
        id:"home",
        title:"Boyan Peychoff",
        subtitle:"Java, Javascript, and Swift software developer.",
        infoSections:[   {
                title:  "Who am I?",
                image:{
                    image:myImage,
                    height:'329',
                    width:'438'
                },
                infoText:"I love coding, playing guitar, and basketball! I dabble in chess as well. Big time coffee enthusiast! I decided I wanted to be a software engineer after spending countless hours of my childhood playing video games on the computer. I realized though the game dev industry was not for me and focused my efforts learning about web development and mobile development. Whether it's through podcasts, articles or youtube videos, I'm always learning!!",


            },
            {
                title:"Skills",
                image:"",
                infoText:"my coding skills summarized :",
                listInfo: [{
                    isInline:true,
                    items:skillItems
                }]
            }
        ]
    },
    {
        id:"workExperience",
        title:"Work Experience",
        subtitle:"Most recent experience",
        infoSections:[
            {
                title:"Alberta Blue Cross",
                subtitle:"Systems Analyst 3",
                image:"",
                infoText:"I worked the Blue Cross member facing website and iOS app where members can submit their claims and check their benefits and many other features.",
                listInfo: [{
                    isInline:false,
                    items:abcListItems
                }]
            },
            {
                title:"University of Alberta",
                subtitle:"Web Developer",
                image:"",
                infoText:"I collaborated with a music curator and professor to create an augmented reality sound walk. ",
                listInfo:[{
                    isInline:false,
                    items:uOfAItems
                }]
            },
            {
                title:"Caesar's School of Music",
                subtitle:"Guitar teacher",
                image:"",
                infoText:"I taught classical, acoustic, and electric guitar lessons to children from ages four to sixteen.",
                listInfo:[{
                    isInline:false,
                    items:guitarItems
                }]
            }
        ]
    },
    {
        id:"projects",
        title:"Projects",
        subtitle:"A sample of my previous works",
        infoSections:[
            {
                title:"Alberta Blue Cross Member site",
                image:{
                    image:abcWebPagePic,
                    height:'212',
                    width:'438',

                },
                subtitle:"Work project",
                infoText:"I ported components of the Alberta Blue Cross member site from Oracle ADF to Spring. I learned how to use Thymeleaf to template our HTML pages. I have also worked on the REST APIs in this project that are used by our mobile apps.",
                listInfo:[
                    {
                        isInline:false,
                        items:abcWebsiteItems
                    }
                ]
            },
            {
                title:"Alberta Blue Cross Member App (iOS)",
                image:{
                    image:abcIOSHomeScreenPic,
                    height:'491',
                    width:'276'
                },
                subtitle:"Work project",
                infoText:"I implemented functionality in the Alberta Blue Cross iOS Member app. Alongside the Spring rewrite of the website, Alberta Blue Cross also re wrote their iOS so that the whole code base would be in Swift. ",
                listInfo:[{
                    isInline:false,
                    items:iOSAppItems
                }]
            },
            {
                title:"This Webpage!",
                image:"",
                subtitle:"React learning project",
                infoText:"I built this webpage using React so I can use what I've learned through React tutorials in a practical way. I wanted to use my understanding of React components and try to use them in an efficient way.",
                listInfo:[{
                    isInline:false,
                    items:websiteItems
                }]
            },
            {
                title:"Peer to Peer Blogging Service",
                image:"",
                subtitle:"University project",
                infoText:"",
                listInfo:[{
                    isInline:false,
                    items:p2pItems
                }],
            },
            {
                title:"Expense tracker app (Android)",
                image:"",
                subtitle:"University project",
                infoText:"",
                listInfo: [{
                    isInline:false,
                    items:trackerAppItems
                }]

            }
        ],
    }
        
      
];

export default resumeData;