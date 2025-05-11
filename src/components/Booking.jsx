import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Booking() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    phone: Yup.string().required("Phone number is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    date: Yup.date().required("Date is Required"),
    time: Yup.string().required("Time is Required"),
    guests: Yup.number()
      .min(1, "At least 1 guest")
      .max(20, "Max 20 guests")
      .required("No of guests is Required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log("Submitting reservation...", values);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        alert("🎉 Reservation successfully booked!");
        navigate("/");
        console.log("Success:", values);
        resetForm();
      } else {
        alert("❌ Booking failed. Please try again after sometime.");
        console.error("Booking failed:", values);
      }

      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg bg-white mb-8">
      <h2 className="text-2xl font-bold mb-4">Reserve a Table</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <label>
              Name
              <Field
                name="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label>
              Phone Number
              <Field
                name="phone"
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label>
              Email
              <Field
                name="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label>
              Date
              <Field
                name="date"
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label>
              Time
              <Field
                name="time"
                type="time"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="time"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <label>
              Number of Guests
              <Field
                name="guests"
                type="number"
                min="1"
                max="20"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="guests"
                component="div"
                className="text-red-500 text-sm"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#F4CE14] text-black font-semibold py-2 rounded-xl ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Booking;
