import AdminLogin from "./login/page";
import RegisterNewUser from "./registerNewUsers/page";

export default function AdminHome() {
  return (
    <div>
      <AdminLogin />
      <RegisterNewUser />
    </div>
  );
}
