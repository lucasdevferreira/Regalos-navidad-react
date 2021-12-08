//ACTIONS
export const ADD_GIFT = "ADD_GIFT";
export const REMOVE_GIFT = "REMOVE_GIFT";
export const REMOVE_ALL = "REMOVE_ALL";
export function createGift(giftName) {
  return {
    type: ADD_GIFT,
    payload: giftName,
  };
}
export function removeGift(id) {
  return {
    type: REMOVE_GIFT,
    id,
  };
}
export function removeAll() {
  return {
    type: REMOVE_ALL,
    payload: [],
  };
}
