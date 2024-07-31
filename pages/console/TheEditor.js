// components/TheEditor.js
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react').then(mod => mod.default), { ssr: false });

const TheEditor = ({ value, onChange }) => {
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');

  const handleEditorChange = (newValue) => {
    onChange(newValue); // 将新值传递给父组件
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div style={{marginLeft:'4vw',marginBottom:'3vh'}}>
      <div style={{display:'flex', flexDirection:'row',marginBottom:'1vh',marginTop:'1vh'}}>
      <div style={{display:'flex', flexDirection:'column',width:'24vw',marginLeft:'1vw'}}>
        <label htmlFor="language-select">Language:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
        </select>
      </div>
      <div style={{display:'flex', flexDirection:'column',width:'24vw',marginLeft:'1vw'}}>
        <label htmlFor="theme-select">Theme:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="vs-dark">Dark</option>
          <option value="vs-light">Light</option>
          <option value="hc-black">High Contrast Black</option>
          <option value="hc-light-blue">High Contrast Light Blue</option>
        </select>
      </div>
      </div>
      <MonacoEditor
        width="50vw"
        height={'100vh'}
        language={language}
        theme={theme}
        value={value}
        options={{
          selectOnLineNumbers: true,
          matchBrackets: "near",
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default TheEditor;