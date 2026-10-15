import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login-form";
import { getAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await getAdminSession();
  if (session.state === "allowed") {
    redirect("/admin/volunteers");
  }
  return (
    <div className="space-y-6">
      <h1 className="font-serif text-3xl text-ink">Staff sign in</h1>
      <p className="text-muted">
        Enter your campaign staff email. We will send you a sign in link.
      </p>
      <AdminLoginForm />
    </div>
  );
}
