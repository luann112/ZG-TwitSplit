import { SAMPLE_USERS } from 'lib/enums';

export const className = (...rest) => rest.filter(Boolean).join(' ');

export const getAvatar = (id) => {
  const { avatar = null } = SAMPLE_USERS.find(item => item.id === id) || {};
  return avatar;
}

const isValidMessage = (msgStr) => {
  const words = msgStr.split(/[\s,]+/);
  const sortedWord = words.sort((a, b) => b.length - a.length);
  if (sortedWord[0].length > 50) { return false; }
  return true;
}

const removeLastWord = str => str.slice(0, str.lastIndexOf(' '));


export const splitMessage = (msgStr) => {
  // return the error if the message contains a span of non-whitespace characters longers than 50 characters.
  if (!isValidMessage(msgStr)) { throw new Error("Invalid message!"); }
  const segments = msgStr.match(/.{1,46}/g) // split the message into segments, each segment have maximum length is 46
  let basket = ''; // store the excess part of current segment
  const segmentsData = segments.map((segment, index) => {
    const numberOfSegment = segments.length; // estimate number
    const order = index + 1;
    let tempChunk = `${order}/${numberOfSegment} ${basket}${segment}`; // have format like the example: "1/2 this is message have maximum length is 46"
    let chunk = `${basket}${segment}`;
    basket = '';
    // "aaa ", "sss"
    // "aaa", " sss"
    // "aaa", "a ss"
    // check if the last word is full or not
    if (chunk[chunk.length - 1] !== ' ' && segments[index + 1] && segments[index + 1][0] !== ' ') { // if the last word is not full
      basket = chunk.slice(chunk.lastIndexOf(' ')); // put the first part of the last word to the basket
      tempChunk = removeLastWord(tempChunk); // adjust the tempChunk
      chunk = removeLastWord(chunk); // adjust the chunk
    }
    if (tempChunk.length > 50) { // make sure the temp chunk is not over 50 characters
      basket = `${chunk.slice(chunk.lastIndexOf(' '))} ${basket}`; // continue put the excess part to the basket
      chunk = removeLastWord(chunk); // adjust the chunk by removing the excess part
    }
    
    return { order, numberOfSegment, chunk: chunk.trim() }; // make sure the chunk is not contain the unnecessary whitespace at the both ends
  });
  // Adjust the result like to the expected format
  const result = segmentsData.map(item => `${item.order}/${item.numberOfSegment} ${item.chunk}`);
  return result;
}