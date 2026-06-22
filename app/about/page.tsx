import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ComingSoon from "../components/comingSoon";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ComingSoon
        title="About"
        description="A deeper look at who I am, where I've been, and what drives me. Coming soon."
      />
      <Footer />
    </>
  );
}
