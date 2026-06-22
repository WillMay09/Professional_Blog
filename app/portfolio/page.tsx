import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ComingSoon from "../components/comingSoon";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <ComingSoon
        title="Projects"
        description="A showcase of the work I've built — the problems solved, technologies used, and lessons learned. Coming soon."
      />
      <Footer />
    </>
  );
}
