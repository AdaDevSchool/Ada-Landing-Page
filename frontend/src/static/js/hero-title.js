gsap.registerPlugin(SplitText);
console.log("ASD")

const segmenter = new Intl.Segmenter("zh", { granularity: "word" });

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  const split = SplitText.create(".split", {
    type: "words",
    wordsClass: "word",
    prepareText: (text, el) => {
      return [...segmenter.segment(text)].map(s => s.segment).join(String.fromCharCode(8204))
    },
    wordDelimiter: { delimiter: /\u200c/, replaceWith: " " },
    autoSplit: true,
    onSplit: (self) => {
      return gsap.from(self.words, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "back"
      });
    }
  });
});
