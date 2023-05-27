const { Storage } = require("@google-cloud/storage");
const path = require("path");
const os = require("os");

module.exports = async (req, res) => {
  // Get the local download folder path based on the operating system
  const downloadFolder = os.homedir(); // Use the user's home directory as the default download folder
  const fileName = req.body.fileName;
  // Instantiate a storage client with authentication
  const storage = new Storage({
    keyFilename: "./credentials/fiery-iridium-298208-971ebd2b12ce.json", // Replace with the actual path to your service account key file
  });

  // Define the bucket name and file name
  const bucketName = "hackathn_dataset";

  // Define the local file path to save the downloaded file
  const localFilePath = path.join(downloadFolder, fileName);
  console.log("Local file path:", localFilePath);

  async function downloadFile() {
    try {
      // Download the file from the Cloud Storage bucket
      await storage.bucket(bucketName).file(fileName).download({
        destination: localFilePath,
      });
      console.log("File downloaded successfully.");
      res.json({
        success: true,
        message: "File has been downloaded",
      });
    } catch (error) {
      console.error("Error downloading file:", error);
      res.json({
        success: false,
        error: error,
      });
    }
  }

  // Call the downloadFile function to start the download
  downloadFile();
};
