export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

export function removeFeature(item) {
    return { type: REMOVE_FEATURE, payload: item }
}

export function buyItem(item) {
    return { type: BUY_ITEM, payload: item }
}