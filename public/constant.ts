import { Link } from "../components/ActiveLink";

export const ADMIN_ROUTE: Link[] = [
  {
    id: "admin",
    link: "/admin",
    name: "Home",
  },
  {
    id: "users",
    link: "/admin/users",
    name: "Users",
  },
  {
    id: "booking",
    link: "/admin/records/booking",
    name: "Booking",
  },
  {
    id: "add",
    link: "/admin/add",
    name: "Add admin",
  },
];

export const USER_ROUTE: Link[] = [
  {
    id: "home",
    link: "/home",
    name: "Home",
  },
  {
    id: "myBooking",
    link: "/booking",
    name: "My Booking",
  },
];
