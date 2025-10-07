import { useCallback, useEffect, useRef, useState } from "react"


function PasswordGeneratorComponent() {
    const [length,setLength] = useState(6);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [charAllowed,setCharAllowed] = useState(false);
    const [password,setPassword] = useState('');
    const passwordRef = useRef<HTMLInputElement>(null);

    const passwordGenerator = useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if(numberAllowed) str += '0123456789';
        if(charAllowed) str += '@!#$%^&*(){}-_+=';

        for (let index = 0; index < length; index++) {
            const charIndex = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIndex)
            
        }
        setPassword(pass)
    },
    [length,numberAllowed,charAllowed,setPassword]);

    useEffect(()=>{
        passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator]);

    const copyPassword = useCallback(()=>{
    console.log(passwordRef);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    // window.navigator.clipboard.writeText(passwordRef.current?.value)
    window.navigator.clipboard.writeText(password)
    },[password])
    return (
        <>
        <h1 className="text-4xl text-center underline text-white pt-5">
        Password Generator
        </h1>
        <div className="w-full max-w-md px-4 my-8 py-4 rounded-lg mx-auto shadow-md bg-blue-950 text-amber-700">
            <div className="rounded-lg flex shadow overflow-hidden w-full mb-4">
                <input 
                    type="text" 
                    value={password}
                    className="w-full py-3 px-3 outline-none bg-white placeholder:text-gray-500"
                    readOnly
                    ref={passwordRef}
                    placeholder="Password Generator"
                />
                <button 
                className="bg-blue-700 px-4 text-white" onClick={copyPassword}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range"
                    min={6}
                    max={100}
                    value={length} 
                    onChange={(e:any)=>{setLength(e.target.value)}}/>
                    <label>Langth : {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                    checked={numberAllowed}
                    id="numberInput"
                    onChange={(e) => setNumberAllowed(e.target.checked)}/>
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                <input type="checkbox"
                    checked={charAllowed} 
                    id="charInput"
                    onChange={(e:any)=>{setCharAllowed(e.target.checked)}}/>
                    <label htmlFor="charInput">Charector</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default PasswordGeneratorComponent