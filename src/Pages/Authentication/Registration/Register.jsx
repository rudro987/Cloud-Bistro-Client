import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser, loading} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const formSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => console.log(result.user)
        )
        reset();
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(formSubmit)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input {...register('name', {required: true})} type="text" placeholder="email" className="input input-bordered" />
          {errors.name && <span className="text-red-600">User name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email', {required: true})} type="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password', {required: true})} type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span className="text-red-600">Password is required</span>}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
      <p className="text-center mb-10"><small>Already hve an account? <Link to="/login">Please sign in</Link></small></p>
    </div>
  </div>
</div>
    );
};

export default Register;