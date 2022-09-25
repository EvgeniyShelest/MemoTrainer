import shuffle from "./shuffle";

const generateArray = () => {
  const range = [...Array(18)].map((v,i)=> i+1);
  const sliced = shuffle(range).slice(0,8);
  return shuffle(sliced.concat(sliced));
}

export default generateArray;
