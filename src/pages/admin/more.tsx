import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t } = useHooks();
  if (!data) {
    return <p>{t("Loading...")}</p>;
  }
  return (
    <div>
      <div className="flex">
        <div className="mr-[30px]">
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <p>{t("firstName")}:</p>
            </p>
            <b>{data.firstName}</b>
          </div>
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <p>{t("lastName")}:</p>
            </p>
            <b>{data.lastName}</b>
          </div>
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <p>{t("email")}:</p>
            </p>
            <b>{data.email}</b>
          </div>
        </div>
        <div className="mr-[20px]">
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <p>{t("username")}:</p>
            </p>
            <b>{data.username}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
