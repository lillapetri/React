import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Chip from '@material-ui/core/Chip';
import {v4 as uuid} from 'uuid';

const Tags2 = props => {
    const selectedTags = tags => {
        console.log(tags);
    };
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, i) => 
                <Chip label={tag} key={uuid()} id={i} className="tag" onDelete={() => removeTags(i)}>
                    <CancelIcon color='secondary' onClick={()=>removeTags(i)}/>
                </Chip>
                )}
            </ul>
            <input
                type="text"
                onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                placeholder="Press enter to add tags"
            />
        </div>
    );
};
export default Tags2;
/* 
const App = () => {
    const selectedTags = tags => {
        console.log(tags);
    };
    return (
        <div className="App">
            <TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root")); */