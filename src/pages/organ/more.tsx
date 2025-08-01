import { useHooks } from "hooks";
import { QRCodeSVG } from "qrcode.react";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t, get } = useHooks();

  if (!data) {
    return <p>{t("Loading...")}</p>;
  }

  const id = get(data, "_id");
  const url = `https://vr.student.uzcontest.uz/view-organ.html?id=${id}`;

  let token = localStorage.getItem("token");

  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold dark:text-white">
            {t("Token for organ detail")}
          </h3>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center flex-1 break-all">
              {token}
            </p>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(token || "")}
            className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-200 flex-shrink-0"
            title="Copy token"
          >
            Copy
          </button>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <QRCodeSVG
              value={url}
              size={200}
              level="M"
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs">
            {t("Scan this QR code to open the organ detail page")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
