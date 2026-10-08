import { execFile } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const script = `
  const h2 = document.querySelector('h2');
  const section = document.querySelector('section');
  const words = Array.from(document.querySelectorAll('.approach-word')).map(w => ({
    text: w.textContent,
    x: w.getBoundingClientRect().left,
    right: w.getBoundingClientRect().right,
    width: w.getBoundingClientRect().width,
    display: getComputedStyle(w).display,
  }));
  console.log(JSON.stringify({
    windowWidth: window.innerWidth,
    sectionWidth: section.getBoundingClientRect().width,
    h2Width: h2.getBoundingClientRect().width,
    h2FontSize: getComputedStyle(h2).fontSize,
    h2WhiteSpace: getComputedStyle(h2).whiteSpace,
    words: words.slice(0, 10),
  }));
`;

const args = [
  '--headless=new',
  '--disable-gpu',
  '--window-size=390,844',
  '--run-all-compositor-stages-before-draw',
  'http://localhost:3000/approach-preview'
];

execFile(chromePath, args, (err, stdout, stderr) => {
  // We can evaluate script via CDP or small html
  console.log('stdout:', stdout);
});
