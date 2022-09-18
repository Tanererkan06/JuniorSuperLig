import http from "../http-common";
class NewsuploadFileUploadServices { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/newsupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/newsupload/files");
    }
  }
 
  
  export default new NewsuploadFileUploadServices();