export default function getBgValue(color = []) {
  let finalString = ""

  color.forEach(c => {
    finalString += `${c.value} `;
  });

  return finalString;
  
}
