// Напишите функцию, которая принимает строку с CSS-свойствами
// и возвращает объект, где ключи — CSS-свойства, значения — соответствующие
// значения.

let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
  const styleObject = {};
  const propertyParts = str
                      .replace(/\n\s*/g, '')
                      .split(';');
  for (let i = 0; i < propertyParts.length - 1; i++) {
    let prop = propertyParts[i].split(': ');
    styleObject[prop[0]] = prop[1];
  }

  return styleObject;
}