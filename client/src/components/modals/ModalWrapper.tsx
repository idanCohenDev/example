import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import ChooseCategoryModal from "./ChooseCategoryModal";
import { toggleModal } from "../../state/ui/uiSlice";
import StatsModal from "./StatsModal";

function ModalWrapper() {
 const openModal = useSelector((state: RootState) => state.ui.isModalOpen);
 const dispatch = useDispatch<AppDispatch>();

 const getCurrentModal = () => {
  // Determine which modal to show
  switch (openModal) {
   case "CATEGROY":
    return <ChooseCategoryModal />;
   case "STATS":
    return <StatsModal />;
   default:
    return null;
  }
 };

 if (openModal === "NONE") return null;

 return (
  <Transition.Root show={!!openModal}>
   <Dialog
    className="relative z-10"
    onClose={() => dispatch(toggleModal("NONE"))}
   >
    <Transition.Child
     enter="ease-out duration-300"
     enterFrom="opacity-0"
     enterTo="opacity-100"
     leave="ease-in duration-200"
     leaveFrom="opacity-100"
     leaveTo="opacity-0"
    >
     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    </Transition.Child>

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
     <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
      <Transition.Child
       enter="ease-out duration-300"
       enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       enterTo="opacity-100 translate-y-0 sm:scale-100"
       leave="ease-in duration-200"
       leaveFrom="opacity-100 translate-y-0 sm:scale-100"
       leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
       <Dialog.Panel className="relative transform rounded-lg px-4 pb-4 pt-5 text-left shadow-xl transition-all bg-white sm:my-8 sm:w-full sm:p-6">
        {getCurrentModal()}
       </Dialog.Panel>
      </Transition.Child>
     </div>
    </div>
   </Dialog>
  </Transition.Root>
 );
}

export default ModalWrapper;
