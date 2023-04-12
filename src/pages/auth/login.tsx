import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { callbackUrl } = useRouter().query;

  return (
    <>
      <Box w={"100vw"} h={"100vh"} display="grid" placeContent="center">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button
              variant="solid"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </Box>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
