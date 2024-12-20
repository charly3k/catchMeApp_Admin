import { StateCreator } from "zustand";

export type ModalState = {
   displayDeleteModal: boolean;
    //deactivatedUsers: UserProfile[];
    deleteUserId:string
}

export type ModalAction={
    setDisplayDeleteModal: (displayDeleteModal: boolean) => void;
   // setDeactivatedUsers: (users: UserProfile[]) => void;
   setDeleteUserId:(deleteUserId:string)=>void
}


const initialState: ModalState = {

    displayDeleteModal: false,
    deleteUserId:''
}

export const createModalSlice: StateCreator<ModalState & ModalAction> = (set) => ({
...initialState,
   setDisplayDeleteModal: (displayDeleteModal) => set({displayDeleteModal}),
   setDeleteUserId:(deleteUserId)=>set({deleteUserId})

})
