import { StateCreator } from "zustand";

export type ModalState = {
   displayDeleteModal: boolean;
    //deactivatedUsers: UserProfile[];
}

export type ModalAction={
    setDisplayDeleteModal: (displayDeleteModal: boolean) => void;
   // setDeactivatedUsers: (users: UserProfile[]) => void;
}


const initialState: ModalState = {

    displayDeleteModal: false
}

export const createModalSlice: StateCreator<ModalState & ModalAction> = (set) => ({
...initialState,
   setDisplayDeleteModal: (displayDeleteModal) => set({displayDeleteModal}),

})
