// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
}