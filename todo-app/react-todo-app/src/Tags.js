import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';

export default function Tags(props){
    const selectedTags = props;
    const {tag, id, key, removeTag} = props;
    return (
    <Chip tag={tag} label={tag} key={key} id={id} className="tag" onDelete={() => removeTag(id)}>
        <CancelIcon color='secondary' />
    </Chip>
    );
};