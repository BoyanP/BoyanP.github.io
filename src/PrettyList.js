import React from 'react';
//PrettyList is meant to just be a self contained html list with images
//that you can plop into other components.
/*
    item = {
        text:"text to show "
        image:"path/to/image"
    }
    text will show below the image.
*/
const PrettyList = ({items, isInline})=>{
    console.log(items);
    return(
        <div>
        <ul className={ (isInline ? "list-inline":"") + " prettyList"}>
            {console.log(items)}
            {
                items &&
                items.map((item)=>{
                   return( <li className={ isInline? "list-inline-item custom-inline" : "" } >
                        <p className="listText">{item.text} </p>
                        {   item.image && 
                            
                            <img src={item.image} />
                        }
                    </li>
                    );
                    
                })
            }
        </ul>
        </div>
    );
};

export default PrettyList;