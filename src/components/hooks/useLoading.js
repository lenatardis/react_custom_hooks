import { useState, useEffect } from "react";

export const useLoading = (fetchMethod, params) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);
        fetchMethod(params).then((res) => {
            setData(res);
            console.log("Users: ", res);
        });
    }, [fetchMethod, params]);

    return data;

};
