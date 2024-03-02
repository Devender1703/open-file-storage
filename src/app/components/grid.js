'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import download  from "../../../public/logos/download-svgrepo-com.svg";
import deleteIcon  from  "../../../public/logos/delete-1-svgrepo-com.svg";
import useForceUpdate from "@/hooks/useForceUpdate";

const Grid = () => {

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [forceUpdate, setForceUpdate] = useForceUpdate();
    
    useEffect(() => {
        setLoading(true);
        fetch('api/GetFiles',
        {
            method: 'GET'
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((blobs) => {
            setFiles(blobs);
            setLoading(false);
        })
    }, [forceUpdate]);

    const onDelete = (file) => {
        fetch(`api/DeleteFile?url=${file.url}`, 
        {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            setForceUpdate();
        })
    }


    return (<div className="max-w-screen-lg mx-auto p-4">
    <table className= "table-auto w-full">
    <thead>
    <tr className="bg-gray-100">
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">uploaded</th>
        <th className="px-4 py-2">Activities</th>
    </tr>
    </thead>
    <tbody>
        {loading ? <tr>
            <td className="px-4 py-2">Loading....</td>
        </tr> 
        : files.map((file, index) => {
        return (<tr key={index}>
            <td className="px-4 py-2">{file.pathname}</td>
            <td className="px-4 py-2">{file.uploadedAt}</td>
            
            <td className="flex px-4 py-2">
                <Link href={`${file.downloadUrl}`}>
                    <Image src={download} alt="download" width={30} height={30}></Image>
                </Link>
                <Image src={deleteIcon} alt="delete" width={30} height={30} onClick={() => onDelete(file)}></Image>
            </td>
        </tr>)
        })}
    </tbody>
    </table>
  
    </div>);
}

export default Grid;