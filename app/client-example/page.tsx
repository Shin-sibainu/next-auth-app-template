import { auth } from "@/auth";
import ClientExample from "@/components/client-example";
import { SessionProvider } from "next-auth/react";

const ClientPage = async () => {
  const session = await auth();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  return (
    <SessionProvider basePath="/auth" session={session}>
      <ClientExample />
    </SessionProvider>
  );
};

export default ClientPage;
