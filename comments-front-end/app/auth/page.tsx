"use client";

import { useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { Button, Stack, Link, Box } from "@mui/material";
import InputField from "@/components/InputField";


export default function AuthPage() {

  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  return (
        <Box
      component="form"
      autoComplete="off"
      width={600}
    >
    <Stack spacing={2}>
      <InputField label="Email" type="email" />
      <InputField label="Password" type="password" />
      <Button variant="contained" color="primary">
        {view === "login" ? "Login" : "Sign Up"}
      </Button>
      <Link component={NextLink} href={view === "login" ? "/auth?view=signup" : "/auth?view=login"} variant="body2" align="center">
        {view === "login" ? "Don't have an account? Sign up here!" : "Already have an account? Login here!"}
      </Link>
    </Stack>
    </Box>
  );
}