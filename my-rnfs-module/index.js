import * as FileSystem from 'expo-file-system';

const filePath = FileSystem.documentDirectory + 'myfile.txt';

async function writeAndReadFile() {
  try {
    // Write to a file
    await FileSystem.writeAsStringAsync(filePath, 'Hello, world!');
    console.log('File written successfully!');

    // Read from the file
    const content = await FileSystem.readAsStringAsync(filePath);
    console.log('File content:', content);

    // Delete the file
    await FileSystem.deleteAsync(filePath);
    console.log('File deleted successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

export { writeAndReadFile };
