import { useState } from "react";

export const useFetching = (callback: Function) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fething = async () => {
        try {
            setLoading(true);
            await callback()
        } catch (e:any) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    };

    return [fething, loading, error]
};
