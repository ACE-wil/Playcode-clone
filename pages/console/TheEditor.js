// components/MonacoEditor.js
import dynamic from 'next/dynamic';
import { useState } from 'react';

// 动态导入MonacoEditor，以确保其仅在客户端渲染
const MonacoEditor = dynamic(() => import('@monaco-editor/react').then(mod => mod.default), { ssr: false });

const TheEditor = ({ value, onChange }) => {
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');

  const handleEditorChange = (value) => {
    onChange(value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="language-select">Language:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
          {/* 添加更多语言选项 */}
        </select>
      </div>
      <div>
        <label htmlFor="theme-select">Theme:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="vs-dark">Dark</option>
          <option value="vs-light">Light</option>
          <option value="hc-black">High Contrast Black</option>
          <option value="hc-light-blue">High Contrast Light Blue</option>
          {/* 添加更多主题选项 */}
        </select>
      </div>
    <MonacoEditor
      width="100%"
      height={'50vh'}
      language={language}
          theme={theme}
          value={value}
          options={{
            selectOnLineNumbers: true,
            matchBrackets: "near",
          }}
      defaultValue={value}
      onChange={handleEditorChange}
    />
    </div>
  );
};

export default TheEditor;
