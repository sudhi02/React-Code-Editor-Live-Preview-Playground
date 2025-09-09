import { useState, useRef, useEffect } from 'react';
import { EXAMPLES } from './examples';
import { GetUserDetails } from '../services/accountService';
import { loadReactGlobally } from '../utils/reactLoader';

export const useCodeRunner = () => {
    const [code, setCode] = useState(EXAMPLES.counter);
    const [error, setError] = useState('');
    const previewRef = useRef(null);

    useEffect(() => {
        // Load React and Babel globally when the hook is initialized
        loadReactGlobally();
    }, []);

    const runCode = () => {
        if (!previewRef.current) return;

        const preview = previewRef.current;

        // Clear previous output and errors
        preview.innerHTML = '';
        setError('');

        try {
            // Ensure React and Babel are available globally
            loadReactGlobally();
            
            // Make the API function available to the evaluated code
            window.__GetUserDetails = GetUserDetails;

            // Wrap the code to capture the returned component
            const fullCode = `
                const GetUserDetails = window.__GetUserDetails;
                ${code}
                ReactDOM.createRoot(document.getElementById('preview')).render(React.createElement(App));
            `;

            // Transpile and execute the code
            const transpiledCode = window.Babel.transform(fullCode, {
                presets: ['react']
            }).code;

            // Execute the transpiled code
            eval(transpiledCode);
        } catch (error) {
            // Display error message
            setError(error.message);
            console.error("Code execution error:", error);
        } finally {
            // Clean up API function
            delete window.__GetUserDetails;
        }
    };

    // Run the initial code on component mount
    useEffect(() => {
        const timer = setTimeout(runCode, 500);
        return () => clearTimeout(timer);
    }, []);

    return {
        code,
        setCode,
        runCode,
        error,
        previewRef
    };
};