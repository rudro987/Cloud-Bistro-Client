import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const formSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => console.log(result.user)
        )
        reset();
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex-row">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(formSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register('email', {required: true})} type="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register('password', {required: true})} type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;