document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translateButton').addEventListener('click', function() {
        const text = document.getElementById('textInput').value;
        console.log('Translating text:', text);  // Debug log
        const emojiText = translateToEmoji(text);
        document.getElementById('emojiOutput').textContent = emojiText;
    });

    document.getElementById('addCustomMapping').addEventListener('click', function() {
        const customWord = document.getElementById('customWord').value.toLowerCase();
        const customEmoji = document.getElementById('customEmoji').value;
        console.log('Adding custom mapping:', customWord, customEmoji);  // Debug log
        emojiDictionary[customWord] = customEmoji;
    });
});

const emojiDictionary = {
    "happy": "😊",
    "sad": "😢",
    "scared": "😱",
    "angry": "😠",
        "love": "❤️",
        "sleepy": "😴",
        "superman": "🦸‍♂️",
        "man": "👨",
        "woman": "👩",
        "skeleton": "💀",
        "cry": "😭",
        "smart": "😎",
        "poop": "💩",
        "thumbsup": "👍",
        "thumbsdown": "👎",
        "cat": "🐱",
        "dog": "🐶",
        "heart": "❤️",
        "star": "⭐",
        "sun": "☀️",
        "moon": "🌙",
        "earth": "🌎",
        "fire": "🔥",
        "water": "💧",
        "party": "🎉",
        "heart eyes": "😍",
        "laugh": "😄",
        "neutral": "😐",
        

};

function translateToEmoji(text) {
    let words = text.toLowerCase().split(/\s+/);
    return words.map(word => emojiDictionary[word] || word).join(" ");
}
