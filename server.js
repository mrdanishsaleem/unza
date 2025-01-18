const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// API Endpoint
app.post("/generate", (req, res) => {
  const { name, memory, tone } = req.body;

  const letters = {
    romantic: [
      `My dearest ${name},\n\nThinking of our time together reminds me of ${memory}. You are the most wonderful person in my life, and my love for you grows stronger every day. Yours forever.`,
      `Beloved ${name},\n\nEvery moment with you feels like a dream, especially when I think of ${memory}. My heart beats only for you.`,
      `To my love, ${name},\n\nThe memories of ${memory} fill my heart with warmth. You are my forever, and I’ll love you always.`,
      `Darling ${name},\n\nEvery day I find new reasons to fall in love with you, like that beautiful moment we shared together, ${memory}. I love you endlessly.`,
      `Sweetheart ${name},\n\nThe time we spent together will forever be etched in my heart. I can’t wait to make more memories with you, starting with this one: ${memory}.`,
      `My love, ${name},\n\nThe time we spent during ${memory} is one I will forever cherish. Being with you fills my heart with joy.`,
      `Dearest ${name},\n\nEvery day I find a thousand new reasons to adore you. ${memory} will forever be my favorite memory of us.`,
      `To my one and only ${name},\n\nThe world seems brighter, and my heart feels fuller because of you. ${memory} was one of our many beautiful moments.`,
      `Sweet ${name},\n\nNo distance can change the way I feel about you. The memory of ${memory} will always keep us close at heart.`,
    ],
    playful: [
      `Hey ${name},\n\nRemember that time ${memory}? You make every moment so much fun! You’re my favorite person in the world.`,
      `What's up, ${name}?\n\nThinking of you always brings a smile, especially when I recall that crazy moment we shared during ${memory}. You’re the best!`,
      `Hey ${name},\n\nRemember when we laughed until we cried at ${memory}? That was epic. I love making memories with you!`,
      `Yo ${name},\n\nI can’t help but think of the time when we did that hilarious thing together, ${memory}. You're my partner in crime!`,
      `Hey ${name},\n\nI swear, our memory of ${memory} still cracks me up! You bring so much joy into my life.`,
      `Hey ${name},\n\nDo you remember that time when we couldn't stop laughing at ${memory}? You always make life so fun!`,
      `What's going on, ${name}?\n\nI still can't believe what happened during ${memory}. You always know how to make me laugh!`,
      `Hey ${name},\n\nWe definitely need to make more memories like ${memory}. That was a blast! Let’s do it again soon.`,
      `Yo ${name},\n\nEvery time I think about ${memory}, I can't help but smile. You turn every little moment into something unforgettable.`,
    ],
    poetic: [
      `${name}, my love,\n\n${memory} was like a dream. With every heartbeat, I’m reminded of the beauty you bring into my life.`,
      `My dearest ${name},\n\nThe memories of ${memory} dance like a melody in my mind. You’re my muse, and I’m forever captivated by you.`,
      `Oh, ${name},\n\nHow deeply your presence lingers in my soul. Each moment, like the one we spent in ${memory}, weaves a timeless story of love.`,
      `Sweet ${name},\n\nThe sun could set and rise a thousand times, and I would still be lost in the memory of us, especially that beautiful moment of ${memory}.`,
      `Beloved ${name},\n\nEvery whisper of the wind reminds me of the time we shared during ${memory}. You, my love, are a poetry written in the stars.`,
      `Dearest ${name},\n\nEvery time I think of ${memory}, I find myself lost in the sweetness of that moment. You are the inspiration to every word I write.`,
      `My heart beats for you, ${name},\n\nThe memory of ${memory} will forever echo in my soul. You are the song that plays in the chambers of my heart.`,
      `Beloved ${name},\n\nHow gentle and infinite the love between us feels, like the softness of the breeze during ${memory}. Forever entwined in this dream.`,
      `Sweet ${name},\n\nYour love is a garden of endless beauty. The memory of ${memory} will forever blossom in my heart, like the softest petals in spring.`,
    ],
  };

  // Randomly select a response based on the tone
  const selectedLetter =
    letters[tone][Math.floor(Math.random() * letters[tone].length)] ||
    "Default love letter content";

  res.json({ letter: selectedLetter });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
