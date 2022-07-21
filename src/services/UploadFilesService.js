// Create Service for File Upload

import http from "../http-common";
class UploadFilesService {

  // upload(file) - POST form data with a callback for tracking upload progress
  upload(file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);
    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  // getFiles() - GET list of Images’ information
  getFiles() {
    return http.get("/files");
  }
}
export default new UploadFilesService();

