const normalize = (str) => str.split('').sort().join('');

const filterAnagrams = (word, searchAnagrams) => {
  const mackWord = normalize(word);
  return searchAnagrams.filter((anagram) => mackWord === normalize(anagram));
};

export default filterAnagrams;
