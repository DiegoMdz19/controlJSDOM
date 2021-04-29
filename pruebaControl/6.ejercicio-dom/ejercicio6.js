const paragraphs = document.querySelectorAll('p');

for (const paragraph of paragraphs) {
    const fiveWords = Array.from(paragraph.innerText.match(/([A-Z])\w{5,}/gim));

    for (const word of fiveWords) {
        const uWord = `<u>${word}</u>`;
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(word, uWord);
    }
}
