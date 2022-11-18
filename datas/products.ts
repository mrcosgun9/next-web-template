import { IProduct } from "../types/ContentType";

export const products: IProduct[] = [
  {
    content: "shower-drains1.jpg",
    description:
      "Shower drains are used to discharge water. They are wider and longer than typical classic drains, enabling faster discharge avoiding accumulation. They are easily cleaned by removing their caps.",
    img: "/images/products/shower-drains/min/shower-drains1.jpg",
    title: "Shower Drains",
    url: "shower-drains",
    images: [
      {
        min: "/images/products/shower-drains/min/shower-drains1.jpg",
        max: "/images/products/shower-drains/max/shower-drains1.jpg",
      },
      {
        min: "/images/products/shower-drains/min/shower-drains2.jpg",
        max: "/images/products/shower-drains/max/shower-drains2.jpg",
      },
      {
        min: "/images/products/shower-drains/min/shower-drains3.jpg",
        max: "/images/products/shower-drains/max/shower-drains3.jpg",
      },
    ],
    category: {
      id: 0,
      title: "Other Stainless-Steel Products",
    },
  },
  {
    content: "",
    description:
      "Floor drains are used to transfer water that is accumulated at a specific point into a plumbing inlet. They are typically installed in house and office kitchens, restaurant or other industrial kitchens and laundry facilities.",
    img: "/images/products/shower-drains/min/shower-drains2.jpg",
    title: "Floor Drains",
    url: "floor-drains",
    images: [{ max: "", min: "" }],
    category: {
      id: 0,
      title: "Other Stainless-Steel Products",
    },
  },
  {
    content: "",
    description:
      "These profiles are primarily used for eliminating elevation differences between surfaces and can serve as borderline between differing horizontal and vertical surfaces.",
    img: "/images/products/shower-drains/min/shower-drains3.jpg",
    title: "Transition Profiles",
    url: "transition-drains",
    images: [{ max: "", min: "" }],
    category: {
      id: 0,
      title: "Other Stainless-Steel Products",
    },
  },
  {
    content: "",
    description:
      "Membrane is an insulation product that prevents passage of water. Different types of membranes are installed depending on the specific location and expected function.",
    img: "/images/products/insulation-products/min/insulation-product1.jpg",
    title: "Membrane",
    url: "membrane ",
    images: [{ max: "", min: "" }],
    category: {
      id: 1,
      title: "Insulation Products",
    },
  },
];
