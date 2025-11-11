import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 29 oktober 2025",
    image: require("@/assets/images/img-0.png"),
  },
  {
    id: 2,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-1.png"),
  },
  {
    id: 3,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-2.png"),
  },
  {
    id: 4,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-3.png"),
  },
  {
    id: 5,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-3.png"),
  },
  {
    id: 6,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-3.png"),
  },
  {
    id: 7,
    title: "Belajar membuat aplikasi mobile",
    description: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/img-3.png"),
  },
];

type Note = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: ImageSourcePropType | { uri: string };
};
