// index.js
const RNFS = require('react-native-fs');

const filePath = RNFS.DocumentDirectoryPath + '/myfile.txt';

async function writeAndReadFile() {
  try {
    // Write to a file
    await RNFS.writeFile(filePath, 'Hello, world!');
    console.log('File written successfully!');

    // Read from the file
    const content = await RNFS.readFile(filePath);
    console.log('File content:', content);

    // Delete the file
    await RNFS.unlink(filePath);
    console.log('File deleted successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = { writeAndReadFile };
