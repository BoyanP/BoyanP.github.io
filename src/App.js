import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MainSection from './MainSection';
import PrettyList from './PrettyList';
import myImage from './assets/mountainPic.jpg';
import resumeData from './data';


function App() {

//these variables here are just for testing.
 const listItems = [
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

  const infoProps = {
        title:"Who am I?",
        image:myImage,
        infoText:"I like coding, basketball, chess, and playing guitar.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
    };
  const infoPropsSkills = {
      title:"Skills",
      image:"",
      infoText:"my coding skills summarized",
      listInfo:<PrettyList items={listItems} isInline={true} id="list1"></PrettyList>
  };

  const infoWorkExp = [
    {
    title:"Alberta Blue Cross",
    subtitle:"Systems Analyst 3",
    image:"",
    infoText:"The design of my website is flawed probably",
    listInfo:<PrettyList items={abcListItems} isInline={false} id="list2"></PrettyList>
  },

  {
    title:"University of Alberta",
    subtitle:"Web Developer",
    image:"",
    infoText:"I worked with a professor for a website"
  },
  {
    title:"Caesar's School of Music",
    subtitle:"Guitar teacher",
    image:"",
    infoText:"I taught guitar lessons to children from ages four to sixteen."
  }
  ];

 
  const sectionTitle2 = "Work Experience";
  const sectionTitle3 = "Projects";
  return (
    <div className="mainPage">
     <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="customNav">
    <div className="container-fluid">
    
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#workExperience">{sectionTitle2}</Nav.Link>
      <Nav.Link href="#projects">{sectionTitle3}</Nav.Link>
    </Nav>
    <Navbar.Brand href="#home">Boyan Peychoff</Navbar.Brand>
    </div>
  </Navbar>
  <div className="container-fluid mainContent">
    {
      resumeData.map((section)=> {
        return <MainSection title={section.title} subtitle={section.subtitle} infoSections={section.infoSections} id={section.id}></MainSection>
      })
    }
  </div>
    </div>
  );
}

export default App;
