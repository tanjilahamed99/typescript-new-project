import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Banner from "@/components/Banner";
import ShowData from "@/components/ShowData";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div>
        <ShowData />
      </div>

      <Footer />
    </div>
  );
}
