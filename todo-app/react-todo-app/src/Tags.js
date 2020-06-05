import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function Tags({tags}) {
    return (
        <div >
            {tags.map(tag =>
            <Chip 
            id={tag.tag_id}
            key={tag.tag_id}
            label={tag.tag_text} 
            />
            )}
        </div>
    )
}
