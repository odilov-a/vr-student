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
        url="/students/update-student"
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
            name: "phoneNumber",
            value: get(selectedCard, "phoneNumber"),
          },
          {
            type: "any",
            name: "photoUrl",
            value: get(selectedCard, "photoUrl"),
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
                    name="phoneNumber"
                    label={t("Phone Number")}
                    component={Fields.Input}
                    placeholder={t("Phone Number")}
                    rootClassName="mr-[10px]"
                  />
                  <Field
                    type="text"
                    name="email"
                    label={t("Email")}
                    component={Fields.Input}
                    placeholder={t("Email")}
                  />
                  <div className="col-span-2">
                    <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[10px]">
                      {t("photo")}
                    </p>
                    <Field
                      name="photoUrl"
                      label={t("Photo")}
                      placeholder={t("Photo")}
                      rootClassName="mb-[8px]"
                      component={Fields.FileUpload3}
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </div>
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
