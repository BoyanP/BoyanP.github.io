import React from "react";
import InfoSection from "./InfoSection";

const MainSection = (props) => {
    const {title, subtitle, infoSections, id } = {...props}
    return (
        <section className="mainSection shadow " id = {id}>
            <h2> {title} </h2>
            <h5>{subtitle}</h5>

            {infoSections &&
                infoSections.map((section,index)=>{
                    return (<InfoSection key={index} section={section}>
                    </InfoSection>);
                })
            }
        </section>

    );
};

export default MainSection;