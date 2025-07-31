import { useState } from "react";
import { Modal, Button, Table } from "antd";
import { useHooks } from "hooks";
import Container from "modules/container";
import { useNavigate } from "react-router-dom";
import More from "./more";

type OrganItem = {
  _id: string;
  name: string;
  description: string;
};

const Organ = () => {
  const { t } = useHooks();
  const navigate = useNavigate();
  const [moreModal, showMoreModal] = useState({ open: false, data: {} });

  return (
    <>
      <Modal
        open={moreModal.open}
        onCancel={() => showMoreModal({ open: false, data: {} })}
        footer={null}
        centered
        title={t("More information")}
        width={700}
        destroyOnClose
      >
        <More {...{ showMoreModal, moreModal }} />
      </Modal>
      <div className="content-panel">
        <div>
          <Container.All url="/organs" name="organs">
            {({ items }) => {
              const typedItems = items as OrganItem[];
              return (
                <div>
                  <Table
                    dataSource={typedItems}
                    rowKey="_id"
                    pagination={{ pageSize: 12 }}
                    onRow={(record) => ({
                      onClick: () =>
                        showMoreModal({ open: true, data: record }),
                    })}
                    className="cursor-pointer"
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
                        render: (_: any, record: OrganItem) => (
                          <Button
                            type="primary"
                            size="small"
                            onClick={() => {
                              navigate(`/organs/${record._id}`);
                            }}
                            className="w-[50%] bg-[#1677ff] hover:bg-[#096dd9] h-[30px]"
                          >
                            {t("More Info")}
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

export default Organ;
