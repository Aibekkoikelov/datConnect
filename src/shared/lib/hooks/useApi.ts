import { useState } from 'react';

type ApiHook = () => Promise<any> | any
export const useApi = (func: ApiHook) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const call = async () => {
        setLoading(true);
        try {
            const response = await func();
            setLoading(false);
            return response;
        } catch (e) {
            setLoading(false);
            setError(e);
            throw e;
        }
    };

    return [call, loading, error];
};
