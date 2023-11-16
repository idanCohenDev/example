import Button from "./general/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { getImages } from "../state/images/imagesSlice";
import { toggleModal } from "../state/ui/uiSlice";

function TopContainer() {
 const images = useSelector((state: RootState) => state.images);
 const { isPending, page, category } = images;
 const dispatch = useDispatch<AppDispatch>();
 return (
  <div className="w-full flex justify-between px-4 py-2">
   <Button
    disabled={page === 1 || isPending}
    text={"Prev"}
    onClick={() => dispatch(getImages({ page: page - 1, category }))}
   />
   <Button
    disabled={isPending}
    text={"Choose Category"}
    onClick={() => dispatch(toggleModal("CATEGROY"))}
   />
   <Button
    disabled={isPending}
    text="Next"
    onClick={() => dispatch(getImages({ page: page + 1, category }))}
   />
  </div>
 );
}

export default TopContainer;
