

import { EXAMPLES } from './examples';

export default function Main({ code, setCode, runCode, error, previewRef }) {

  return (
    <div className="editor-container">
      <div className="code-panel">
        <div className="panel-header">
          <div className="panel-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Code Editor
          </div>
          <div className="example-buttons">
            <button className={`example-button ${code === EXAMPLES.counter ? 'activebutton' : ''}`} onClick={() => setCode(EXAMPLES.counter)}>
              Counter
            </button>
            <button className={`example-button ${code === EXAMPLES.todo ? 'activebutton' : ''}`} onClick={() => setCode(EXAMPLES.todo)}>
              Todo
            </button>
            <button className={`example-button ${code === EXAMPLES.api ? 'activebutton' : ''}`} onClick={() => setCode(EXAMPLES.api)}>
              API
            </button>
          </div>
          <button className="run-button" onClick={runCode}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Run Code
          </button>
        </div>
        <div className="code-editor">
          <textarea 
            id="code-input" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
          />
        </div>
      </div>

      <div className="preview-panel">
        <div className="panel-header">
          <div className="panel-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            Live Preview
          </div>
        </div>
        <div className="preview-content" id="preview" ref={previewRef}>
          <div style={{padding: '20px', textAlign: 'center', color: '#888'}}>
            Output will be displayed here after clicking Run
          </div>
        </div>
        {error && (
          <div className="error-panel visible">
            <div className="error-message">{error}</div>
          </div>
        )}
      </div>
    </div>
  );
}