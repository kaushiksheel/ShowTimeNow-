import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  return (
    <div>
      <Button variant="outline" size={"md"} onClick={() => signIn()}>
        Login
      </Button>
    </div>
  );
}

export default Dashboard;
