(function() {
    var quotes = [
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: '&mdash;Nelson Mandela'
      },
      {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: '&mdash;Mother Teresa'
      },

      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: '&mdash;Eleanor Roosevelt'
      },
      {
        text: "So many books, so little time.",
        author: '&mdash;Frank Zappa'
      },
      {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: '&mdash;Oscar Wilde'
      },
      {
        text: "Be less curious about people and more curious about ideas.",
        author: '&mdash;Marie Curie'
      },
      {
        text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        author: '&mdash;Steve Jobs'
      },
      {
        text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: '&mdash;Winston S. Churchill'
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: '&mdash;Walt Disney'
      },
      {
        text: "I would rather die of passion than of boredom.",
        author: '&mdash;Vincent van Gogh'
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: '&mdash;Confucius'
      },
      {
        text: "We cannot solve our problems with the same thinking we used when we created them.",
        author: '&mdash;Albert Einstein'
      },
      {
        text: "The victim should have the right to end his life, if he wants. But I think it would be a great mistake. However bad life may seem, there is always something you can do, and succeed at. While there's life, there is hope.",
        author: '&mdash;Stephen W. Hawking'
      },
      {
        text: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        author: '&mdash;Neil Armstrong'
      },
      {
        text: "We cannot live better than in seeking to become better.",
        author: '&mdash;Socrates'
      },
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
      '<q>' + quote.text + '</q>' + '<p>' + quote.author +'</p>';
  })();