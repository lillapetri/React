import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';


export default function Tags2(props){
    const selectedTags = props;
    const {tag, id, removeTags} = props;
    console.log(selectedTags);
    
    return (
    <Chip tag={tag} label={tag} key={id} id={id} className="tag" onDelete={() => removeTags(id)}>
        <CancelIcon color='secondary' onClick={()=>removeTags(id)}/>
    </Chip>
    );
};