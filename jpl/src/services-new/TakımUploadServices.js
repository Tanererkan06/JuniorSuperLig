class TakımUploadServices  { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/Takimupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/Takimupload/files");
    }
  }
 
  
  export default new TakımUploadServices ();