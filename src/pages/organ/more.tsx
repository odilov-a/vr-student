import { useHooks } from "hooks";
import { QRCodeSVG } from "qrcode.react";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t, get } = useHooks();

  if (!data) {
    return <p>{t("Loading...")}</p>;
  }

  const id = get(data, "_id");
  const url = `http://192.168.0.103:3001/view-organ.html?id=${id}`;

  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-lg font-semibold dark:text-white">
            {t("QR Code")}
          </h3>
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
