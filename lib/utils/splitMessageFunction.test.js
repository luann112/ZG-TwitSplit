import { splitMessage } from './index';

describe('splitMessage function', () => {
  const matchRE = /[1-9]\d?\/[1-9]\d?\s.*/;
  const exampleMessage1 = "I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.";
  const result1 = splitMessage(exampleMessage1);
  it('result1 should have 2 elements', () => {
    expect(result1.length).toBe(2);
  });
  it('each element of result1 should not empty', () => {
    result1.map(item => (
      expect(item).not.toBe('')
    ));
  });
  it('each element of result1 should have length no more than 50 charater', () => {
    result1.map(item => (
      expect(item.length).toBeLessThan(51)
    ));
  });
  it('each element of result 1 should have the matchRE format', () => {
    result1.map(item => {
      expect(matchRE.test(item)).toBe(true)
    });
  });
  it('compare to the expect result', () => {
    expect(result1[0]).toBe("1/2 I can't believe Tweeter now supports chunking");
    expect(result1[1]).toBe("2/2 my messages, so I don't have to do it myself.");
  });

  const exampleMessage2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa this is an error message";
  it('should throw an error message', () => {
    try {
      const result2 = splitMessage(exampleMessage2); 
    } catch (error) {
      expect(error.message).toBe('Invalid message!');
    }
  });
});