'use server'

import { redirect } from "next/navigation"
import { post } from "@/utils/customFetch";

const createUser = async (prevState: unknown, formData: FormData) => {

  const payload = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const res = await post('/users', payload)

  if (res?.errors) {
    return { errors: res.errors }
  }

  redirect('/comments')
}

export { createUser }