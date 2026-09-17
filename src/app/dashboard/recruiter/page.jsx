"use client";
import React from "react";
import { authClient } from "@/app/lib/auth-client";
import StatCard, { StatCardGrid } from "@/components/dashboard/StatCard";
import { File, Persons, Thunderbolt, CircleCheck } from "@gravity-ui/icons";

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5">
      {user && <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>}

      <StatCardGrid>
        <StatCard icon={File} label="Total Job Posts" value={48} />
        <StatCard icon={Persons} label="Total Applicants" value={1284} />
        <StatCard icon={Thunderbolt} label="Active Jobs" value={18} />
        <StatCard icon={CircleCheck} label="Jobs Closed" value={32} />
      </StatCardGrid>
    </div>
  );
};

export default RecruiterDashboardHomePage;
