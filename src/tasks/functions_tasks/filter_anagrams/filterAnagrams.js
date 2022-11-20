const normalize = (str) => str.split('').sort().join('');

const filterAnagrams = (word, searchAnagrams) => {
  const normalizedWord = normalize(word);
  return searchAnagrams.filter((anagram) => normalizedWord === normalize(anagram));
};

export default filterAnagrams;
