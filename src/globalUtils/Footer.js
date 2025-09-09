export default function Footer() {
    return (<>
        <div className="footer">
            <h3>React Live Editor</h3>
            <p>Your playground for React experimentation and learning.</p>
            <div className="footer-taglines">
                <span>Code • Preview • Learn • Repeat</span>
            </div>
            <div className="footer-section">
                <p> Experiment with React code and see instant results. Perfect for learning, testing ideas, and sharpening your skills. </p>
            </div>

            <div className="footer-bottom">
                <p>Made with ❤️ for the React community</p>
                <p>© {new Date().getFullYear()} React Live Editor • Practice Makes Perfect</p>
            </div>
        </div>
    </>)
}