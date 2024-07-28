import React, { useState, useEffect } from 'react';

function ConsoleTester() {
    const [code, setCode] = useState('console.log("Hello, World!");');
    const [output, setOutput] = useState('');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

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
        p.style.color = 'black'; // 设置错误信息的颜色
        document.getElementById('console').appendChild(p);
        setOutput(document.getElementById('console').innerHTML);
    };

    useEffect(() => {
        runCode(); // 当代码改变时自动运行
    }, [code]); // 依赖于`code`的变化

    return (
        <div>
            <textarea
                value={code}
                onChange={handleCodeChange}
                style={{ width: '100%', height: '50vh' }}
            />
            <button onClick={runCode}>Run Code</button>
            <div id="console" style={{ height: '50vh', overflowY: 'scroll', backgroundColor: '#f4f4f4', padding: '10px' }} dangerouslySetInnerHTML={{ __html: output }} />
        </div>
    );
}

export default ConsoleTester;