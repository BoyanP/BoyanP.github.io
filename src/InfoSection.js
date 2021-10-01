import React from 'react';
import PrettyList from './PrettyList';

/* InfoSectionProps should be 
    props = {
        title:"InfoSectionTitle",
        image:"path/to/image",
        infoText:"TextToDisplay"
    }
    props.children will display within the section
*/ 

const InfoSection = (props) => {
    const {title, subtitle, image,infoText, listInfo} = {...props.section};
    return(

        <section className ="infoSection">
            
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
              
            <div className="row">
                 {   image &&
                        <img src={image} className="img-fluid rounded col-4"/>   
                }
               
                <p className="col-6 infoView"> {infoText}
                
                </p>
                
                  
            </div>
            
            <section className="moreInfo">
                {console.log(listInfo)}
                {
                    listInfo && 
                    listInfo.map((info,index)=>{
                        console.log(info.items);
                        return <PrettyList items={info.items} isInline={info.isInline} key={"list"+info+index}></PrettyList>
                    })
                    
                }
            </section>
        </section>
    );

}

export default InfoSection;