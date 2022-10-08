export const random = (chance: number) => {
 const number = Math.random();

 return number <= (chance / 100);
}
