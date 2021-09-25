import Image from './Image';
import myImage from './assets/mountainPic.jpg';
import PrettyList from './PrettyList';
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

const websiteItems = [
    {
        text:"I tried to organize the code in such a way that I can move the data to a DB and the retrieval of JSON data would be used with just adding the api call",
        image:""
    },
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


const resumeData = [
    {
        id:"home",
        title:"Boyan Peychoff",
        subtitle:"Java, Javascript, and Swift developer with a front end focus.",
        infoSections:[   {
                title:  "Who am I?",
                image:myImage,
                infoText:"I love coding, playing guitar, and basketball! I dabble in chess as well. Big time coffee enthusiast! I decided I wanted to be a software engineer after spending countless hours of my childhood playing video games on the computer. I realized though the game dev industry was not for me and focused my efforts learning about web development and mobile development. Trying to stay up to date with everything by listening to podcasts!",


            },
            {
                title:"Skills",
                image:"",
                infoText:"my coding skills summarized",
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
                infoText:"I worked with a professor for a website",
                listInfo:[]
            },
            {
                title:"Caesar's School of Music",
                subtitle:"Guitar teacher",
                image:"",
                infoText:"I taught guitar lessons to children from ages four to sixteen.",
                listInfo:[]
            }
        ]
    },
    {
        id:"projects",
        title:"Projects",
        subtitle:"Work projects and projects outside of work",
        infoSections:[
            {
                title:"Alberta Blue Cross Member site",
                image:"",
                subtitle:"Work project",
                infoText:"I worked on moving our member site from Oracle ADF to Spring. I learned how to use Thymeleaf to template our HTML pages. I have also worked on the REST APIs in this project that are used by our mobile apps.",
                listInfo:[]
            },
            {
                title:"Alberta Blue Cross Member App (iOS)",
                image:"",
                subtitle:"Work project",
                infoText:"",
                listInfo:[]
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
                listInfo:[],
            },
            {
                title:"Five Stages of Keith",
                image:"",
                subtitle:"University project",
                infoText:"",
                listInfo:[]
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