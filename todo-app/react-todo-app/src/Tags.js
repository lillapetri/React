import React from 'react';
import * as apiCalls from './APIs/TagAPI';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';

export default function Tags({tag, id, todoId, key}){
    const handleDelete = () => {
        let obj = {id: id, todoId: todoId}
        apiCalls.removeTag(obj);
        window.location.reload();
    }
    return (
    <Chip tag={tag} label={tag} key={key} id={id} className="tag" onDelete={handleDelete}>
        <CancelIcon color='secondary' />
    </Chip>
    );
};