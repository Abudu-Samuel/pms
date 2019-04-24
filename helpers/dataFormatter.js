export const calTotalPopulation = (locations, property) => {
  const addition = (accumulator, digit) => accumulator + digit;
  const totalPrice = locations.map(item => item[property]).reduce(addition);
  return totalPrice;
};

export const formatData = data => ({
  ...data,
  totalPopulation: data.malePopulation + data.femalePopulation,
  sublocations: !data.sublocations
    ? null
    : data.sublocations.map(sublocation => ({
        ...sublocation,
        totalPopulation:
          sublocation.malePopulation + sublocation.femalePopulation
      }))
});
