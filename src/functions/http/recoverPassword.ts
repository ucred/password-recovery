"use server";

export async function getSession(token: string) {
  "use server";

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/password-recovery/${token}`
  );

  if (!response.ok) {
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}

export async function submitForm(token: string, password: string) {
  "use server";

  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/password-reset`,
    {
      method: "POST",
      body: JSON.stringify({ token, password }),
    }
  );

  if (!response.ok) {
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
}
