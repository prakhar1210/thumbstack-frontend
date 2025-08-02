import { useForm } from "react-hook-form";
import API from "@/lib/api";
import { useRouter } from "next/router";
import { setUserCookie } from "@/lib/auth";

export default function Signup() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await API.post('/auth/signup', data);
    setUserCookie(res.data.user);
    router.push('/books');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <input {...register("name")} placeholder="Name" className="w-full border p-2" />
        <input {...register("email")} placeholder="Email" className="w-full border p-2" />
        <input {...register("password")} type="password" placeholder="Password" className="w-full border p-2" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
