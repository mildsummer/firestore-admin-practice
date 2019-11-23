export default (array) => {
  const keys = [];
  array.forEach((data) => {
    Object.keys(data).forEach((key) => {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
      }
    });
  });
  const lineArray = [keys.join(',')].concat(
    array.map((data) => keys.map((key) => {
      let valueString = '';
      if (typeof data[key] === 'number') {
        valueString = data[key];
      } else if (typeof data[key] === 'string') {
        valueString = `"${data[key]}"`;
      } else {
        valueString = `"${JSON.stringify(data[key]).replace(/"/g, '""')}"`;
      }
      return valueString;
    }).join(',')),
  );
  return lineArray.join('\r\n');
};