import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import Loader from "./general/Loader";
import { selectImage, toggleModal } from "../state/ui/uiSlice";
import { MockImageType } from "../models/Image";
function ImagesBoard() {
 const images = useSelector((state: RootState) => state.images);

 const dispatch = useDispatch<AppDispatch>();

 const handleImageClick = (image: MockImageType) => {
  dispatch(selectImage(image));
  dispatch(toggleModal("STATS"));
 };

 const imagesElements = images.images.map((image) => {
  return (
   <div
    key={image.id}
    role="button"
    className="w-full h-full flex justify-center items-center"
    onClick={() => handleImageClick(image)}
   >
    <img
     className="object-fill overflow-hidden w-full h-full  hover:scale-105 duration-300 ease-in-out"
     src={image.largeImageURL}
     alt={image.tags}
    />
   </div>
  );
 });

 if (images.isPending) return <Loader />;
 return (
  <div className="grid w-screen h-screen grid-cols-3 grid-rows-3">
   {imagesElements}
  </div>
 );
}

export default ImagesBoard;
