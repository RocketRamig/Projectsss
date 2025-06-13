import { useEffect } from "react";

export default function StickyNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        document.getElementById("sticky").style.backgroundColor = "blue";
      } else {
        console.log(window.scrollY)
        document.getElementById("sticky").style.backgroundColor = "red";
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="sticky">yo</div>
      <img src="./Dog3.jpg" alt="fuck u eslint" />
      <div className="tall"></div>
    </>
  );
}
