import http from "../http-common";
class ProfilUploadServices  { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/profilresimupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/profilresimupload/files");
    }
  }
 
  
  export default new ProfilUploadServices ();