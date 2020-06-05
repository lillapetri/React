import { useState } from 'react';

export default initialValue => {
    const [value, setValue] = useState(initialValue);
    const updateValue = e => {
        setValue(e.target.value)
    };
    const reset = () => {
        setValue("")
    };
    return [value, updateValue, reset]
}