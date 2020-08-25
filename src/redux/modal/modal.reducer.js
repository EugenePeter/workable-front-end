import { ModalTypes } from "./modal.types";

const INITAL_STATE = {
    isModalOpen: false,
};

const toggleModalReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ModalTypes.TOOGLE_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        default:
            return state;
    }
};

export default toggleModalReducer;
