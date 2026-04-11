import { CssBaseline } from "@mui/material";
import Providers from "@/components/Providers";
import Header from "@/components/Header/Header";
import { getCurrentUser } from "./actions";
import type { UserType } from "@/types/auth";
import { Container } from "@mui/material";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = (await getCurrentUser()) as UserType;

  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
          <Providers user={currentUser}>
            <CssBaseline />
            <Header />
            <Container className="mt-10">{children}</Container>
          </Providers>
        </main>
      </body>
    </html>
  );
}
