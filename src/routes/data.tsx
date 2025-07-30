import { lazy } from "react";

const User = lazy(() => import("pages/admin"));
const Default = lazy(() => import("pages/default"));
const NotFound = lazy(() => import("pages/notFound"));

const Book = lazy(() => import("pages/book"));
const Organ = lazy(() => import("pages/organ"));
const OrganGetById = lazy(() => import("pages/organGetById"));

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
    path: "/organs",
    key: "organs",
    title: "Organlar",
    element: <Organ />,
  },
  {
    path: "/organs/:id",
    key: "organ-details",
    title: "Organ Details",
    element: <OrganGetById />,
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
