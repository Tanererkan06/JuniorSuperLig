import http from "../http-common";
class OyuncuUploadServices  { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/oyuncuresimupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/oyuncuresimupload/files");
    }
  }
 
  
  export default new OyuncuUploadServices ();