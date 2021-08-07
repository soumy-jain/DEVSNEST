import { useState, useCallback } from "react";

export default function useList (initial){
    const [list, setList] = useState(initial);

    return {
        list,
        setList,
        push: useCallback((i) => {
            setList(temp => {
                temp = [...temp, i]
                return temp;
            })
        }),
        clear: useCallback((i) => {
            setList(temp => {
                return temp.filter((item, index) => index !== i);
            })
        }),
        clearAll: useCallback(() => {
            setList( () => {
                    return [];
            }
        )}),
    }
}