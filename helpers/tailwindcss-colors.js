const colors = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink',
];

const generateColorsList = () => {
  const ret = {};
  colors.forEach((color) => {
    ret[color.replace(/^\w/, (c) => c.toUpperCase())] = color;
  });
  return ret;
};

const colorsList = generateColorsList();

module.exports = { colors, colorsList };
