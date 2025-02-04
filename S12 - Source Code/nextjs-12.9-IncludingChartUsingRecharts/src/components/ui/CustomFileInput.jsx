"use client";

import { useEffect, useState } from "react";
import { UploadIcon } from "../icons";
import { Input } from "./Input";


const CustomFileInput = ({name, required, defaultValue}) => {
    const [fileName, setFileName] = useState("No file chosen.");

    const handleFileChange = (event)=>{
        const file = event.target.files[0];
        setFileName(file.name||"No file chosen.");
    }

    useEffect(()=>{
        if(defaultValue){
            const parts = defaultValue.split("/");
            setFileName(parts[parts.length-1]);
        }
    }, [defaultValue]);

    return (
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
            <Input
                type="file"
                name={name}
                required={required}
                className="sr-only"
                id="fileInput"
                onChange={handleFileChange}
            />
            <label 
                htmlFor="fileInput" 
                className="custom-input px-4 py-2 bg-blue-500 text-white rounded-lg 
                cursor-pointer hover:bg-blue-600 w-fit flex items-center gap-x-2"
            >
                <UploadIcon/>
                Choose File
            </label>
            <span className="ml-3 text-gray-600 truncate">{fileName}</span>
        </div>
    )
}

export default CustomFileInput;