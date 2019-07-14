/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    
    if(!wordSet.has(endWord))
        return 0;
    
    let q = [];
    q.push(beginWord);
    let res = 0;
    
    while(q.length) {
        for(let k=q.length; k>0; --k) {
            let word = q.shift();
            
            if(word === endWord)
                return res + 1;
            
            for(let i=0; i<word.length; i++) {
                let newWord = word.split('');
                
                for(let j=97; j<=122; ++j) {
                    let ch = String.fromCharCode(j)
                    newWord[i] = ch;
                    let s = newWord.join('');
                    if(wordSet.has(s) && s != word) {
                        q.push(s);
                        wordSet.delete(s);
                    }
                }
            }
        }
        ++res;
    }
    return 0;
};