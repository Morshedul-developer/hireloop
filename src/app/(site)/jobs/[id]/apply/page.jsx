import { getUserSession } from "@/app/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";

const ApplyJobPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  if (!user) {
    redirect(`/auth/sign-in?redirect=/jobs/${id}/apply`);
  }
  return (
    <div>
      <h1>Apply Page is here...!</h1>
    </div>
  );
};

export default ApplyJobPage;
