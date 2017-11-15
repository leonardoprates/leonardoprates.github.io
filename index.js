document.addEventListener("DOMContentLoaded", function() {

  const label = 'leonardo prates';
  const head = document.head;
  const title = document.createElement('title');
  const titleText = document.createTextNode(label);
  const link = document.createElement('link');
  const h1 = document.createElement('h1');
  const a = document.createElement('a');
  const h1Styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  };
  const aStyles = {
    color: '#000000',
    textDecoration: 'none',
    borderBottom: '5px dotted #000',
    fontFamily: 'monospace',
    fontVariant: 'small-caps'
  };

  for (let s in h1Styles) {
    h1.style[s] = h1Styles[s];
  }

  for (let s in aStyles) {
    a.style[s] = aStyles[s];
  }

  link.rel = 'icon';
  link.href = 'https://dummyimage.com/16x16/000/66ff91.png&text=LP';
  a.href = 'https://odran037.github.io';
  a.text = label;

  title.appendChild(titleText);
  head.appendChild(title);
  head.appendChild(link);
  h1.appendChild(a);
  this.body.appendChild(h1);

});