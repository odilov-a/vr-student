import { Layout, Select } from "antd";
import i18next from "i18next";
import { useHooks, useGet } from "hooks";
import useStore from "store";
import { privateRoutes } from "routes/data";
import config from "config";

import Avatar from "assets/images/27470334_7309681.jpg";
import Arrow from "assets/images/dropdown-arrow.svg";
import "./style.scss";
import { Link } from "react-router-dom";
import { storage } from "services";

const { Header } = Layout;

const HeaderComponent = () => {
  const { get, location, t, navigate } = useHooks();
  const { data } = useGet({ name: "students", url: "/students/me" });
  const { system } = useStore();
  const { Option } = Select;
  const menus = privateRoutes.find((m) => m.path === get(location, "pathname"));
  const { logOut } = useStore((state) => state);
  const info = get(data, "data", {});
  const changeLang = (langCode: string) => {
    i18next.changeLanguage(langCode);
    window.location.reload();
  };

  return (
    <Header className="flex justify-between items-center bg-[#fff] dark:bg-[#222638] p-0 pr-[20px]">
      <div>
        <span className="font-[500] text-[20px] dark:text-[#9EA3B5] text-black ml-[48px]">
          {t(get(menus, "title", ""))}
        </span>
      </div>
      <div className="text">
        <p>
          {get(info, "balance")} {t("Point")}
        </p>
      </div>
      <div className="flex items-center">
        <Select
          defaultValue={system?.lang}
          size={"large"}
          onChange={(value: any) => {
            changeLang(value);
          }}
        >
          {config.API_LANGUAGES.map((lang) => (
            <Option value={lang?.code}>{get(lang, "short", "")}</Option>
          ))}
        </Select>
        <div className="profile-dropdown">
          <div className="profile-dropdown__circle">
            <img
              className="profile-dropdown__avatar rounded-full w-[40px] h-[40px] object-cover"
              src={get(info, "photoUrl.0", Avatar)}
              alt="avatar"
            />
            <img className="profile-dropdown__arrow" src={Arrow} alt="arrow" />
          </div>
          <div className="profile-dropdown__options">
            <p className="profile-dropdown__item profile-dropdown__info">
              {get(info, "username")}
            </p>
            <Link
              className="profile-dropdown__item profile-dropdown__link"
              to="/profile"
            >
              {t("Profile")}
            </Link>
            <p
              className="profile-dropdown__item profile-dropdown__link"
              onClick={() => (logOut(), storage.remove("token"), navigate("/"))}
            >
              {t("Log out")}
            </p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
