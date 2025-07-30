import { Spin, notification } from "antd";
import { Field } from "formik";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";

const User = ({ showEditModal, selectedCard }: any): JSX.Element => {
  const { get, t } = useHooks();
  return (
    <div>
      <Container.Form
        url="/students/update/me"
        name="students"
        method="put"
        fields={[
          {
            type: "string",
            required: true,
            name: "firstName",
            value: get(selectedCard, "firstName"),
          },
          {
            type: "string",
            required: true,
            name: "lastName",
            value: get(selectedCard, "lastName"),
          },
          {
            type: "string",
            name: "password",
          },
          {
            type: "string",
            required: true,
            name: "username",
            value: get(selectedCard, "username"),
          },
          {
            type: "string",
            name: "email",
            value: get(selectedCard, "email"),
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["students"] });
          resetForm();
          showEditModal(false);
        }}
        onError={(error) => {
          notification.error({
            message: get(error, "errorMessage", t("Something went wrong!")),
            duration: 2,
          });
        }}
      >
        {({ isLoading }) => {
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    type="text"
                    name="firstName"
                    label={t("First Name")}
                    component={Fields.Input}
                    placeholder={t("First Name")}
                    rootClassName="mr-[10px]"
                  />
                  <Field
                    type="text"
                    name="lastName"
                    label={t("Last Name")}
                    component={Fields.Input}
                    placeholder={t("Last Name")}
                  />
                  <Field
                    type="text"
                    name="username"
                    label={t("Username")}
                    component={Fields.Input}
                    placeholder={t("Username")}
                    rootClassName="mr-[10px]"
                  />
                  <Field
                    type="password"
                    name="password"
                    label={t("Password")}
                    component={Fields.Input}
                    placeholder={t("Password")}
                  />
                  <Field
                    type="text"
                    name="email"
                    label={t("Email")}
                    component={Fields.Input}
                    placeholder={t("Email")}
                  />
                  <div className="col-span-2">
                    <Button
                      size="large"
                      htmlType="submit"
                      title={t("Saqlash")}
                      className="w-full mt-[8px]"
                    />
                  </div>
                </div>
              </div>
            </Spin>
          );
        }}
      </Container.Form>
    </div>
  );
};

export default User;
