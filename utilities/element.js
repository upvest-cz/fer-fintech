export const splitIntoWords = (el) => {
  const wordOrHtmlTagRegex = /<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g;

  el.innerHTML = el.innerHTML
    .replace(/\s?<br\s?\/?>\s?/gi, ' <br> ') // normalize br tags so we can split them out
    .replace(wordOrHtmlTagRegex, '<span class=\'word\'><span class=\'word__inner\'>$&</span></span>')
    .replace(/<span class='word'><span class='word__inner'><br><\/span><\/span>/gi, '<br>'); // unwrap back the <br>

  return el.querySelectorAll('.word__inner');
};
