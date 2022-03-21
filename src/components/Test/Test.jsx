import {useState} from "react";

export const Test = function () {

    const [testPaste, setTestPaste] = useState('');
    const [testCopy, setTestCopy] = useState('Hello John!')

    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        setTestPaste(testCopy.slice(start, stop));
    }

    return (
        <>
            <input type="text" name="test-copy" value={testCopy} onCopy={handleCopy} onChange={e => setTestCopy(e.target.value)} />
            <input type="text" name="test-paste" value={testPaste} readOnly />
            <div>Valeur de testPaste: <span>{testPaste}</span></div>
        </>
    )
}