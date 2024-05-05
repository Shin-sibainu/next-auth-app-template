import ClientExample from "@/components/client-example";
import { SessionProvider } from "next-auth/react";

const ClientPage = async () => {
  return (
    <SessionProvider>
      <ClientExample />
    </SessionProvider>
  );
};

export default ClientPage;
