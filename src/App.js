import { useEffect, useState } from 'react';
import { addConnectivityListener, removeConnectivityListeners } from './utils/networkStatus';
import Header from './globalUtils/Header';
import Main from './component/main';
import Footer from './globalUtils/Footer';
import './Style/style.css';
import { EXAMPLES } from './component/examples';
import { useCodeRunner } from './component/useCodeRunner';

function App() {
  const { code, setCode, runCode, error, previewRef } = useCodeRunner();

  useEffect(() => {
    addConnectivityListener(
      () => alert('✅ Internet connection restored!'),
      () => alert('🚫 Internet disconnected.')
    );
    return () => {
      removeConnectivityListeners();
    };
  }, []);

  const loadExample = (example) => {
    setCode(EXAMPLES[example]);
  }

  return (
    <div className="container">
      <Header loadExample={loadExample} />
      <Main 
        code={code} 
        setCode={setCode} 
        runCode={runCode} 
        error={error} 
        previewRef={previewRef} 
      />
      <Footer />
    </div>
  );
}

export default App;