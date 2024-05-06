// import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

// const validationSchema = Yup.object().shape({
//   text: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });
const id = nanoid();

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
    id,
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      // validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.form_wrapper}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="number">Number</label>
        <Field type="text" name="number" />
        <button>Add contact</button>{" "}
      </Form>
    </Formik>
  );
};

export default ContactForm;
