export default function Header({ loadExample }) {
    return (<>
        <div className="header">
            <h1>Practice React Code</h1>
            <p>Write. Run. Refine. Master React in real-time.
                <br></br>
                Quick Start Examples, Try these examples to get started:</p>
            <div className="example-buttons">
                <button className="example-button" onClick={() => loadExample('counter')}>Counter Example</button>
                <button className="example-button" onClick={() => loadExample('todo')}>Todo List Example</button>
                <button className="example-button" onClick={() => loadExample('api')}>API Fetch Example</button>
            </div>
        </div>
    </>)
}