import { TRoom } from "../components/RoomCard";
import { THistory } from "../components/BookingHistoryList";
import { TRecords } from "../pages/admin/records/booking";

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

export const history: TRecords[] = [
  {
    user: "User 1",
    name: "Meeting room",
    date: "23 Jan 2022",
    time: "10:00",
  },
  {
    user: "User 2",
    name: "Karel room 1",
    date: "25 Jan 2022",
    time: "10:00",
  },
];

export default data;
