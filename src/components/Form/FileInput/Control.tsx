'use client'
import { ComponentProps } from "react";
import { useFileInput } from "./Root";


export interface ControlProps extends ComponentProps<"input"> {}


export function Control({ multiple = false, ...props }: ControlProps) {
   const {id, onFilesSelected} = useFileInput()
    function handleFilesSelection(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files?.length)
            return
         const files = Array.from(event.target.files)
         onFilesSelected(files, multiple)
       
    }
    return (
        <input type="file" className="sr-only" id={id} onChange={handleFilesSelection} multiple={multiple} {...props}/>
    );
}