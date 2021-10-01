import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MainSection from './MainSection';
import resumeData from './data';


function App() {
 
  const sectionTitle2 = "Work Experience";
  const sectionTitle3 = "Projects";
  return (
    <div className="mainPage">
     <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="customNav ">
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
