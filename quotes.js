(function() {
    var quotes = [
      {
        text: "text1",
      },
      {
        text: "text2",
      },

      {
        text: "lorem1",
      },
      {
        text: "lorem2",
      }
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML =
      '<q>' + quote.text + '</q>';
  })();