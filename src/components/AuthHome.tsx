"use client";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const SupaAuth = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  //TODO: use session to determine if user is logged in
  const isLoggedIn = session?.user;

  return (
    <div className="container bg-red-200">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          redirectTo="/"
        />
      ) : (
        <p>Account page will go here.</p>
      )}
    </div>
  );
};

export default SupaAuth;
