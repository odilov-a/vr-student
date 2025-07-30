import { lazy } from "react";

const User = lazy(() => import("pages/admin"));
const Default = lazy(() => import("pages/default"));
const NotFound = lazy(() => import("pages/notFound"));

const Book = lazy(() => import("pages/book"));

export interface IRoute {
  path: string;
  key?: string | "*";
  element: JSX.Element;
  inner?: IRoute[];
  index?: boolean;
  title: string;
}

const privateRoutes: IRoute[] = [
  {
    path: "/",
    key: "welcome",
    title: "",
    element: <Default />,
  },
  {
    path: "/books",
    key: "books",
    title: "Kitoblar",
    element: <Book />,
  },
  {
    path: "/profile",
    key: "profile",
    title: "Profil",
    element: <User />,
  },
  {
    path: "*",
    key: "*",
    title: "",
    element: <NotFound />,
  },
];

const publicRoutes: IRoute[] = [
  // {
  //   path: "/about",
  //   key: "about",
  //   title: "About",
  //   element: <About />,
  // },
];

export { privateRoutes, publicRoutes };
