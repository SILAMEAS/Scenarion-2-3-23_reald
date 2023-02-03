export const Convert_A_To_O = (body: any) => {
  const D = body
    ? body.map((a: any, index: number) => {
        return {text: a, value: a, isSelected: index === 0};
      })
    : [];
  console.log(body);
  return D;
};
