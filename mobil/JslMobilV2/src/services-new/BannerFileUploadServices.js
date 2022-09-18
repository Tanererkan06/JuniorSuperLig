import http from "../http-common";
class BanneruploadFileUploadServices { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/bannerupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/bannerupload/files");
    }
  }
 
  
  export default new BanneruploadFileUploadServices();