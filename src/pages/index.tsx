import React from "react";
import { useSession } from "next-auth/react";
import { Navbar } from "@/components/Navbar";

function Dashboard() {
  const { data } = useSession();

  return <Navbar />;
}

export default Dashboard;
