import Layout from "./Layout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

const Login = () => {
  const [formData, setformData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.id;
    const value = event.target.value;

    setformData(values => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.post("/login", formData);
  };

  return (
    <Layout>
      <Head title="Login" />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pw">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </Layout>
  );
};

export default Login;
