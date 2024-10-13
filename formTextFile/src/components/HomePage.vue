<script setup>
import { ref } from 'vue';

let fileTxtInput = ref('');
let randomizedTextHtml = ref('');

const loadFile = () => {
  const file = fileTxtInput.value.files[0];

  if(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const text = e.target.result;
      const randomizedText = randomizeWords(text);
      randomizedTextHtml.value = randomizedText;
    };
    
    reader.readAsText(file);
  }
};

function randomizeWords(text) {
  return text.split(/(\s+|[.,!?;()])|(?=\/)|(?<=\/)/).flatMap(part => {
    if (part === '/' || part === undefined || part === '') return [part];
    return [randomizeWord(part)];
  }).join('');
}

function randomizeWord(word) {
  const trimmedWord = word.replace(/^[^\w]+|[^\w]+$/g, '');
  if (trimmedWord.length <= 3 || trimmedWord.length === 0) return word;

  const firstChar = word.charAt(0);
  const lastChar = word.charAt(word.length - 1);

  const isFirstCharSpecial = !/\w/.test(firstChar);
  const isLastCharSpecial = !/\w/.test(lastChar);

  const middleChars = trimmedWord.slice(1, -1).split('');

  let shuffledChars;
  const maxAttempts = 10;
  let attempts = 0;
      
  do {
    shuffledChars = shuffleArray(middleChars.slice());
    attempts++;
  } while (
    shuffledChars.join('') === middleChars.join('') && attempts < maxAttempts
  );

  if (shuffledChars.join('') === middleChars.join('')) {
    shuffledChars = middleChars.slice(); 
  }

  return (isFirstCharSpecial ? firstChar : '') + 
    trimmedWord.charAt(0) + 
    shuffledChars.join('') + 
    trimmedWord.charAt(trimmedWord.length - 1) + 
    (isLastCharSpecial ? lastChar : '');
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

</script>

<template>
  <section>
    <h1 class="title">Letter randomizer</h1>
    <label for="fileTxtInput" class="label">Choose .txt file:</label>
    <input ref='fileTxtInput' id="fileTxtInput" type="file" accept=".txt" @change="loadFile"/>

    <div v-if="randomizedTextHtml">
      <h2 class="subtitle">Result:</h2>
      <pre class="result">{{ randomizedTextHtml }}</pre>
    </div>
  </section>
</template>

<style scoped>
.label {
  display: block;
}

.title {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
}

.result {
  margin-top: 1.5rem;
  text-wrap: wrap;
}
</style>
