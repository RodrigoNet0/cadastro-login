/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import swal from "sweetalert2";


export default function Login() {
  interface Values {
    email: string;
    number: string; 
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [values, setValues] = useState<Values>({
    email: "",
    number: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    const number = localStorage.getItem("number");
    if (email && number) {
      setValues({
        email: email,
        number: number, 
      });
    }
  }, []);

  const initialValues = {
    email: "",
    number: "",
  };

  const handleSubmit = (values: Values) => {
    localStorage.setItem("email", values.email);
    localStorage.setItem("number", values.number); 

    if (values.email === "user@example.com" && values.number === "123456789") {
      swal.fire({
        icon: "success",
        title: "Contato enviado com sucesso, aguarde o retorno!",
        text: "Agora você pode acessar sua conta",
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      swal.fire({
        icon: "error",
        title: "Erro ao enviar contato!",
        text: "Verifique seu email e número de telefone",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Preencha o email").min(2, "Email inválido"),
    number: yup.string().required("Preencha o número de telefone").min(9, "Número de telefone inválido"),
  });

 

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
      validateOnMount={false}
      validationSchema={validationSchema}
    >
      {({ handleChange }) => (
        <Form>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 shadow-md rounded-md">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  alt="Your Company"
                  src="https://th.bing.com/th/id/OIP.fUhYce_z6yV8dj8qLFkwnAHaHa?rs=1&pid=ImgDetMain"
                  className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center">
               Enviar contato
                </h2>
              </div>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
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
                      htmlFor="number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Número de telefone
                    </label>
                    <div className="text-sm">
                
                    </div>
                  </div>
                  <div className="mt-2">
                    <Field
                      id="number"
                      name="number"
                      type="text" 
                      required
                      autoComplete="tel"
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
              Enviar
                  </button>
                </div>
               
              </div>
             
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
