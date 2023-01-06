import { TRoom } from "../components/RoomCard";

const data: TRoom[] = [
  {
    name: "karel room 1",
    roomId: "room1",
    capacity: 1,
    image:
      "https://i.pinimg.com/originals/1e/e8/87/1ee887d7cfcbd959e386fee478adb0ec.jpg",
    isAvailable: true,
  },
  {
    name: "karel room 2",
    roomId: "room2",
    capacity: 1,
    image:
      "https://i.pinimg.com/originals/1e/e8/87/1ee887d7cfcbd959e386fee478adb0ec.jpg",
    isAvailable: false,
  },
  {
    name: "Meeting room",
    roomId: "room3",
    capacity: 5,
    image:
      "https://gurney.ghotel.com.my/img/asset/bWFpbi9pbWFnZXMvbWVldGluZ3MvY29uZmVyZW5jZS1pLS0taWktMDEtdjUuanBn?w=1920&fit=crop&s=027ab1a7a42b5feb2a3183fe3e952455",
    isAvailable: true,
  },
];

type THistory = TRoom & {
  date: string;
  duration: number;
};

export const bookHistory: THistory[] = [
  {
    name: "Meeting room",
    roomId: "room3",
    capacity: 5,
    image:
      "https://gurney.ghotel.com.my/img/asset/bWFpbi9pbWFnZXMvbWVldGluZ3MvY29uZmVyZW5jZS1pLS0taWktMDEtdjUuanBn?w=1920&fit=crop&s=027ab1a7a42b5feb2a3183fe3e952455",
    isAvailable: true,
    date: "06-10-2023",
    duration: 3,
  },
  {
    name: "Karel room 1",
    roomId: "room1",
    capacity: 1,
    image:
      "https://gurney.ghotel.com.my/img/asset/bWFpbi9pbWFnZXMvbWVldGluZ3MvY29uZmVyZW5jZS1pLS0taWktMDEtdjUuanBn?w=1920&fit=crop&s=027ab1a7a42b5feb2a3183fe3e952455",
    isAvailable: true,
    date: "09-10-2023",
    duration: 2,
  },
];

export default data;
