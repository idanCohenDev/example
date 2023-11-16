import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import TopContainer from "./components/TopContainer";
import ModalWrapper from "./components/modals/ModalWrapper";
import ImagesBoard from "./components/ImagesBoard";
import NoImagesFallback from "./components/NoImagesFallback";

function App() {
 const images = useSelector((state: RootState) => state.images.images);

 console.log(images);

 return (
  <div>
   <TopContainer />
   {images.length === 0 ? <NoImagesFallback /> : <ImagesBoard />}
   <ModalWrapper />
  </div>
 );
}

export default App;
