import { UncontrolledCarousel } from "reactstrap";

export default function Banner() {
  const items = [
    {
      src: "/img/banner1.jpg",
      altText: "Slide 3",
      key: "1",
      caption: "",
    },
    {
      src: "/img/banner2.jpg",
      altText: "Slide 2",
      key: "2",
      caption: "",
    },
    {
      src: "/img/banner3.jpg",
      altText: "Slide 3",
      key: "3",
      caption: "",
    },
  ];

  return <UncontrolledCarousel items={items} style={{ zIndex: 100 }} />;
}
