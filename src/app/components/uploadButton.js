'use client';

import Image from "next/image";
import uploadButton   from "../../../public/logos/upload-svgrepo-com.svg";
import { upload } from '@vercel/blob/client';
import { useFilePicker } from "use-file-picker";
import { useEffect } from "react";

export default function UploadButton()  {

    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: '.txt',
    });

    useEffect(()=>{
        if(!loading && filesContent.length !== 0) {
          upload(filesContent[0].name, filesContent[0].content, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          }).then((blob) => {
            console.log(blob);
          })
        }
    }, [loading]);
    
      
    return (
    <div>
       <Image src={uploadButton} alt="upload" width={30} height={30} onClick={() => openFilePicker()}></Image>
    </div>);
}

  