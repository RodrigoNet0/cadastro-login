/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  interface Values {
    email: string;
    password: string;
  }

  const [, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      setValues({
        email: email,
        password: password,
      });
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: Values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("password", values.password);

    if (values.email === "user@example.com" && values.password === "password") {
      swal.fire({
        icon: "success",
        title: "Login feito com sucesso!",
        text: "Agora você pode acessar sua conta",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      swal.fire({
        icon: "error",
        title: "Login falhou!",
        text: "Verifique seu email e senha",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Preencha o email"),
    password: yup.string().required("Preencha a senha"),
  });

  const onChange = (value: any) => {
    console.log(value);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="https://wallpapercave.com/wp/wp2757956.gif"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        validationSchema={validationSchema}
      >
        {({ handleChange }) => (
          <Form className="bg-white bg-opacity-70 p-8 shadow-md rounded-md max-w-sm w-full z-10">
            <div className="text-center">
              <img
                alt="Your Company"
                src="https://th.bing.com/th/id/OIP.fUhYce_z6yV8dj8qLFkwnAHaHa?rs=1&pid=ImgDetMain"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Entre na sua conta
              </h2>
            </div>

            <div className="mt-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entre
                </button>
              </div>
              <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={onChange} className="mt-4" />
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Não é membro?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Comece uma 14 dias gratuita
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
