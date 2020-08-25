import { ModalTypes } from "./modal.types";

export const toggleModalAction = (value) => ({
    type: ModalTypes.TOOGLE_MODAL,
    payload: value,
});
