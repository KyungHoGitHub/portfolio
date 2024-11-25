import {Button, message, Upload} from "antd";
import {useState} from "react";
import DashBoard from "./DashBoard.jsx";
import axios from "axios";



const UploadComponent = () => {



    const uploadProps = {
        name: "file",
        customRequest: async (options) => {
            const { file, onSuccess, onError } = options;

            try {
                const formData = new FormData();
                formData.append("file", file);

                // Axios 요청
                const response = await axios.post(
                    "http://localhost:8080/upload",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            authorization: "authorization-text", // 필요 시 인증 헤더 추가
                        },
                    }
                );

                // 성공 처리
                onSuccess(response.data, file);
                message.success(`${file.name} file uploaded successfully`);
            } catch (error) {
                console.error("Upload error:", error);
                onError(error);
                message.error(`${file.name} file upload failed.`);
            }
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
        },
    };


    return (
        <>
            <Upload {...uploadProps}>
                <Button >Click to Upload</Button>
            </Upload>
        </>
    )
}
export default UploadComponent;