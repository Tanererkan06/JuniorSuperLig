import http from "../http-common";
class SliderFileUploadServices { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/sliderupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/sliderupload/files");
    }
  }
 
  
  export default new SliderFileUploadServices();