Microblog with React.js based on TheNetNinja tutorial, found here:

https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d

After launching the app, also enable JSON-watching via Node.js command:

npx json-server --watch data/db.json --port 8000

This will watch file and wrap it with API endpoints.

{/* Known Issues */}

{/* Fixed Issues */}
1) Failure to compile - "./src/useFetch.js"
    // ERROR MESSAGE START //

    Failed to compile.

    Error in ./src/useFetch.js

    /Users/pmc/Public/dev/netninja/src/useFetch.js
    14:31  error  'AbortController' is not defined  no-undef

    ✖ 1 problem (1 error, 0 warnings)

    // ERROR MESSAGE END //
    Information: AbortController() allows you to abort one or more web requests when needed.
    // FIX //
    I changed AbortController() to window.AbortController() - see: 
    https://stackoverflow.com/questions/55718778/why-is-abortcontroller-not-defined
