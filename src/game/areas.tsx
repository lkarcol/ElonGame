import { CARD_SIZE } from "./constants";

/*export default () => {
  let areas = [];
  let cardID = 1;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      areas = [
        ...areas,
        {
          cardID,
          x: j * CARD_SIZE.w,
          y: i * CARD_SIZE.h
        }
      ];
      cardID++;
    }
  }
  return areas;
};*/

export default () => {
  return {
    1: { x: 0, y: 0 },
    2: { x: 538, y: 0 },
    3: { x: 269, y: 0 },

    4: { x: 0, y: 380 },
    5: { x: 538, y: 380 },
    6: { x: 269, y: 380 },

    7: { x: 0, y: 190 },
    8: { x: 538, y: 190 }
  };
};
