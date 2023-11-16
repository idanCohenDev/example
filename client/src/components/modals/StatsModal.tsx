import { useSelector } from "react-redux";

import { RootState } from "../../state/store";

export default function StatsModal() {
 const selectedImage = useSelector(
  (state: RootState) => state.ui.selectedImage
 );
 if (!selectedImage) return null;
 const selectedImageData = [
  { name: "Views", value: selectedImage.views },
  { name: "Downloads", value: selectedImage.downloads },
  { name: "Likes", value: selectedImage.likes },
  { name: "Comments", value: selectedImage.comments },
 ];
 return (
  <div className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 ">
   {selectedImageData.map((stat) => (
    <div
     key={stat.name}
     className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-4 sm:px-6 xl:px-8"
    >
     <label className="text-sm font-medium leading-6 text-gray-500">
      {stat.name}
     </label>
     <p className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
      {stat.value}
     </p>
    </div>
   ))}
  </div>
 );
}
