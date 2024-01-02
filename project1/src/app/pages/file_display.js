import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import {myfiles} from '../objects/files'
import Image from 'next/image'
function FileDisplay() {

    return (
        <div class=" grid lg:grid-cols-2 grid-cols-1 sm:items-center sm:justify-center mx-4 mt-2 px-2">
            
             {myfiles.map((file) => (
                    
                    <div className="col-span-1 flex lg:ml-8 mt-2 lg:px-8 px-2 items-start">
                  <p>        
                    <Image 
                        src={file.file}
                        width = "100px"
                        heigh = "100px"
                        />
                    
                    <a href={file.file} class="text-blue-700 hover:underline" download={file.title}>{file.title}</a>
                    </p>
                    
                  </div>
                ))}
            
        </div>
      )
    }
    
    export default FileDisplay