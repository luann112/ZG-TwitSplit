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
  if (!isValidMessage(msgStr)) { throw new Error("Invalid message!"); }
  const segments = msgStr.match(/.{1,46}/g) // each segment have length is 46
  let basket = ''; // to store the leftover of current segment
  const segmentsData = segments.map((segment, index) => {
    const numberOfSegment = segments.length; // estimate number
    const order = index + 1;
    let tempChunk = `${order}/${numberOfSegment} ${basket}${segment}`;
    let chunk = `${basket}${segment}`;
    basket = '';
    // "aaa ", "sss"
    // "aaa", " sss"
    // "aaa", "a ss"
    // check if the last word is full or not
    if (chunk[chunk.length - 1] !== ' ' && segments[index + 1] && segments[index + 1][0] !== ' ') {
      basket = chunk.slice(chunk.lastIndexOf(' '));
      tempChunk = removeLastWord(tempChunk);
      chunk = removeLastWord(chunk);
    }
    if (tempChunk.length > 50) {
      basket = `${chunk.slice(chunk.lastIndexOf(' '))} ${basket}`;
      chunk = removeLastWord(chunk);
    }
    
    return { order, numberOfSegment, chunk: chunk.trim() };
  })
  const result = segmentsData.map(item => `${item.order}/${item.numberOfSegment} ${item.chunk}`);
  return result;
}