import { join } from 'path';

const parser = {
  /**
   * Reads a file and returns its contents as a string.
   *
   * @param {string} filePath - The path to the file to read.
   * @returns {string} The contents of the file.
   * @throws {Error} If the file does not exist.
   */
  readFileSync(filePath) {
    try {
      const fileContents = require('fs').readFileSync(filePath, 'utf8');
      return fileContents;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${join(process.cwd(), filePath)}`);
      } else {
        throw error;
      }
    }
  },

  /**
   * Parses the provided file contents and returns the data as a JSON object.
   *
   * @param {string} fileContents - The contents of the file to parse.
   * @returns {object} The parsed data.
   * @throws {Error} If the file contents are not valid JSON.
   */
  parseFileSync(fileContents) {
    try {
      return JSON.parse(fileContents);
    } catch (error) {
      throw new Error('Invalid JSON');
    }
  }
};

export default parser;