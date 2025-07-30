import { AppstoreOutlined } from "@ant-design/icons";

interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
  route?: string;
}

const menuItems: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <AppstoreOutlined />,
    route: "/",
  },
  {
    key: "books",
    label: "Kitoblar",
    icon: <AppstoreOutlined />,
    route: "/books",
  },
];

function gen4() {
  return Math.random()
    .toString(16)
    .slice(-4);
}

export default {
  menuItems,
};

export { gen4 };
