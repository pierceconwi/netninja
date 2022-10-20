import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // React state set-up for blog data:
    const [data, setData] = useState(null);
    // React state set-up for data
    const [isLoading, setIsLoading] = useState(true);
    // React state set-up for error catching
    const [error, setError] = useState(null);


    useEffect(() => {
        // AbortController() prevents an error by stopping the below fetch request when Home is unmounted
        const abortCont = new AbortController(); 
        // grab json data via endpoint. fetch() returns a promise, so okay to use .then
        fetch(url, { signal: abortCont.signal })
            // take the promise and converts to json
            .then(res => {
                // throw an error if the promise's status code is NOT "ok"
                if(!res.ok) {
                    throw Error('Could not fetch data from resource');
                }
                // then complete conversion of json data
                return res.json(); 
            })
            // take result of previous return and use setBlogs() to render the now-ready json data
            .then(data => {
                setData(data);
                // now that data is loaded and rendered, change state of loading status
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                // don't bother catching errors from the AbortController here
                if (err.name === 'AbortError') {
                    console.log('OK');
                } else {
                    // catch any errors that aren't related to AbortController
                    setError(err.message);
                    setIsLoading(false);
                }
            })
            return () => abortCont.abort();
    }, [url]);
    return { data, isLoading, error }
}
 
export default useFetch;