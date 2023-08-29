const FIRST_PLACE_FLAGS = ["UA", "DE", "US", "RU"];

export const filterCountriesFlag = (listOfFlags: string[]) => {
  const copy = [...listOfFlags];
  copy.forEach((flag, idx) => {
    for(let i = 0; i <= FIRST_PLACE_FLAGS.length; i++) {
      if(flag === FIRST_PLACE_FLAGS[i]) {
        copy.splice(idx, 1)
      }
    }
  })
  return [...FIRST_PLACE_FLAGS, ...copy]
}