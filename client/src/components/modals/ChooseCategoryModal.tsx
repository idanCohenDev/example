import { useState } from "react";
import Button from "../general/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { getImages } from "../../state/images/imagesSlice";
import { toggleModal } from "../../state/ui/uiSlice";
import AppSelect from "../general/AppSelect";
import { categorySelectOptions } from "../../constants/category-select-options";

function ChooseCategoryModal() {
 const page = useSelector((state: RootState) => state.images.page);
 const dispatch = useDispatch<AppDispatch>();
 const [category, setCategory] = useState({
  freeSearch: "",
  predefinedCategory: "all",
 });

 const handleSubmit = () => {
  let categoryToSearch = "";
  if (category.predefinedCategory !== "all") {
   // if predefined category is not "all" then we search for predefined category
   categoryToSearch = category.predefinedCategory;
  } else {
   if (category.freeSearch.trim() === "") categoryToSearch = "all";
   else categoryToSearch = category.freeSearch;
  }
  dispatch(getImages({ page, category: categoryToSearch }));
  dispatch(toggleModal("NONE"));
 };
 return (
  <div className="flex justify-between items-center">
   <div className="flex flex-col mr-8">
    <label htmlFor="category-input">Please enter a category</label>
    <input
     className="border border-gray-300 my-2 rounded-md p-2"
     value={category.freeSearch}
     onChange={({ target }) =>
      setCategory({ ...category, freeSearch: target.value })
     }
     id="categoey-input"
     type="text"
    />
    <div className="relative">
     <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300" />
     </div>
     <div className="relative flex justify-center">
      <span className="bg-white px-2 text-sm text-gray-500">OR</span>
     </div>
    </div>

    <AppSelect
     value={category.predefinedCategory}
     onChange={(value) =>
      setCategory({ ...category, predefinedCategory: value })
     }
     label="Choose predefiend category!"
     options={categorySelectOptions}
    />
   </div>

   <Button text="Submit" onClick={handleSubmit} />
  </div>
 );
}

export default ChooseCategoryModal;
