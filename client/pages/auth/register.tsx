import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";

const createUserSchema = object({
  name: string().nonempty({
    message: "Name is required",
  }),
  password: string()
    .min(6, "Password too short - should be 6 chars minimum")
    .nonempty({
      message: "Name is required",
    }),
  passwordConfirmation: string().nonempty({
    message: "Name is required",
  }),
  email: string().email("Invalid Email").nonempty({
    message: "Name is required",
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

type CreateUserInput = TypeOf<typeof createUserSchema>;

function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  async function onSubmit(values: CreateUserInput) {
    try {
      // await axios.post(`/api/users`, values)
    } catch (error) {}
  }

  console.log({ errors });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="jane.doe@example.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div className="form-element">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            id="passworpasswordConfirmation"
            type="password"
            placeholder="********"
            {...register("passwordConfirmation")}
          />
          <p>{errors.passwordConfirmation?.message}</p>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default RegisterPage;
