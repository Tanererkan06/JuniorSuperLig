class SponsorUploadServices  { 
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("/Sponsorupload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/Sponsorupload/files");
    }
  }
 
  
  export default new SponsorUploadServices ();