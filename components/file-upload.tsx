"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import { FileIcon, X } from "lucide-react"; 
import Image from "next/image";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
    onChange,
    value,
    endpoint,
}: FileUploadProps) => {
    const fileType = value?.split(".").pop();

    if(endpoint === "messageFile" && value && fileType !== "pdf") {
        return (
            <div className="relative w-80 h-52">
                <Image
                    className="rounded-xl object-cover"
                    fill
                    src={value}
                    alt="Upload"
                />
                <button
                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
                    onClick={() => onChange("")}
                    type="button"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        );
    }

    if(value && fileType !== "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    className="rounded-full object-cover"
                    fill
                    src={value}
                    alt="Upload"
                />
                <button
                    className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                    onClick={() => onChange("")}
                    type="button"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        );
    }

    if(value && fileType === "pdf") {
        return (
            <div
                className="relative flex items-center p-2 mt-2 rounded-md bg-background/10"
            >
                <FileIcon className="w-10 h-10 fill-indigo-200 stroke-indigo-400" />
                <a 
                    className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {value}
                </a>
                <button
                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
                    onClick={() => onChange("")}
                    type="button"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        )
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    )
}