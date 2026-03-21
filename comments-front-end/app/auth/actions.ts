'use server'

import { redirect } from "next/navigation"

const createUser = async (prevState: unknown, formData: FormData) => {

  const payload = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const res = await fetch(
      `${process.env.API_URL}/users`,
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.log(`create user, request failed. Data: ${JSON.stringify(data)}`)
      return { error: "" }
    }

  } catch (error) {
    console.log(`create user, request failed. Error: ${error}`)
    return { error: "" }
  }

  redirect('/comments')
}

export { createUser }