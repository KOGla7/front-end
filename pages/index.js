import Body from "@/components/Body";
import Header from "@/components/Header";
import Foot from "@/components/Foot";
import Foot from "@/components/Footer";


export default function Home() {
  return (
    <div className="fixed top-0 w-screen h-screen overflow-y-scroll overflow-x-hidden">
      <Header />
      <Body />
      <Foot />
      <Footer/>
    </div>
  );
}
