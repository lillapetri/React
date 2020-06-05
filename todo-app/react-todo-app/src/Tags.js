import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function Tags({tags, deleteTag}) {
    return (
        <div >
            {tags.map(tag =>
            <Chip 
            key={tag.id}
            label={tag.text} 
            onDelete={() => deleteTag(tag)}
            />
            )}
        </div>
    )
}
