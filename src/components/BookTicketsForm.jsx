import { Form, redirect, useLocation } from "react-router-dom";

const BookTicketsForm = () => {
  const { state } = useLocation();

  const { moviename } = state;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-palanquin capitalize text-4xl max-lg:text-2xl lg:max-w-lg font-bold">
        Book Tickets for "{moviename}"
      </h1>
      <Form method="POST" className="max-w-md mx-auto mt-8">
        <div className="grid md:grid-cols-2 md:gap-6 ">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              placeholder=" "
              required
            />
            <label
              htmlFor="text"
              className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 top-3"
            >
              Email address
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fullName"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            placeholder=" "
            required
          />
          <label
            htmlFor="text"
            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 top-3"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="phoneNo"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            placeholder=" "
            required
          />
          <label
            htmlFor="text"
            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 top-3"
          >
            Phone Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="ticketsCount"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
            placeholder=" "
            required
          />
          <label
            htmlFor="text"
            className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 top-3"
          >
            No of Tickets
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export const bookTicketSubmit = async (data) => {
  const formData = await data.request.formData();
  const userData = Object.fromEntries(formData);

  sessionStorage.setItem("email", userData.email);
  sessionStorage.setItem("fullName", userData.fullName);
  sessionStorage.setItem("phoneNo", userData.phoneNo);
  sessionStorage.setItem("ticketsCount", userData.ticketsCount);
  return redirect("/");
};

export default BookTicketsForm;
