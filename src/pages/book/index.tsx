import { Button, Table } from "antd";
import { useHooks } from "hooks";
import Container from "modules/container";

const Book = () => {
  const { t } = useHooks();

  const handlePayment = (record: any) => {
    console.log("To'lov qilinmoqda:", record);
    // bu yerga to‘lov logikangizni yozing, masalan:
    // navigate(`/payments/${record.id}`);
  };

  return (
    <>
      <div className="content-panel">
        <div>
          <Container.All url="/books" name="books">
            {({ items }) => {
              return (
                <div>
                  <Table
                    dataSource={items}
                    pagination={{ pageSize: 12 }}
                    columns={[
                      {
                        key: "name",
                        align: "center",
                        title: t("Name"),
                        dataIndex: "name",
                        className: "w-[80px]",
                        render: (value) => <div>{value}</div>,
                      },
                      {
                        key: "price",
                        align: "center",
                        title: t("Price"),
                        dataIndex: "price",
                        className: "w-[80px]",
                        render: (value) => <div>{value}</div>,
                      },
                      {
                        key: "description",
                        align: "center",
                        title: t("Description"),
                        dataIndex: "description",
                        className: "w-[180px]",
                        render: (value) => (
                          <span
                            className="dark:text-[#e5e7eb] line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: value }}
                          />
                        ),
                      },
                      {
                        key: "action",
                        align: "center",
                        title: t("Action"),
                        dataIndex: "action",
                        className: "w-[120px]",
                        render: (_, record) => (
                          <Button
                            type="primary"
                            onClick={() => handlePayment(record)}
                            size="small"
                            className="w-[50%] bg-[#1677ff] hover:bg-[#096dd9] h-[30px]"
                          >
                            {t("Sotib olish")}
                          </Button>
                        ),
                      },
                    ]}
                  />
                </div>
              );
            }}
          </Container.All>
        </div>
      </div>
    </>
  );
};

export default Book;
