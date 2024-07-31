import React, { useState, useEffect } from 'react';
import TheEditor from './TheEditor';

function ConsoleTester() {
    const [code, setCode] = useState('console.log("Hello, World!");');
    const [output, setOutput] = useState('');

    const runCode = () => {
        try {
            const consoleDiv = document.getElementById('console');
            consoleDiv.innerHTML = ''; // 清空控制台
            const oldLog = console.log;
            const oldError = console.error;

            // 重定向console.log和console.error
            console.log = (message) => {
                appendMessage(message, false);
            };
            console.error = (error) => {
                appendMessage(`Error: ${error}`, true);
            };

            eval(code); // 注意：使用eval()有一定的安全风险

            // 恢复原始的console.log和console.error
            console.log = oldLog;
            console.error = oldError;
        } catch (error) {
            appendMessage(`Error: ${error.message}`, true);
        }
    };

    const appendMessage = (message, isError) => {
        const p = document.createElement('p');
        p.textContent = message;
        p.style.color =  '#000'; // 如果是错误，则显示红色
        p.style.fontFamily = 'Menlo,Monaco,source-code-pro,Ubuntu Mono,DejaVu sans mono,Consolas,monospace'
        document.getElementById('console').appendChild(p);
        setOutput(document.getElementById('console').innerHTML);
    };

    useEffect(() => {
        runCode(); // 当代码改变时自动运行
    }, [code]); // 依赖于`code`的变化

    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            <TheEditor value={code} onChange={setCode} /> {/* 使用 TheEditor 替换 textarea */}
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{marginTop:'1vh',padding:'20px',fontWeight:'bold',fontSize:'20px'}}>Console</div>
                <div id="console" style={{ height: '100vh', overflowY: 'scroll', backgroundColor: '#fcc7d7;', padding: '20px', width:'50vw' }} dangerouslySetInnerHTML={{ __html: output }} />

                </div>
        </div>
    );
}

export default ConsoleTester;