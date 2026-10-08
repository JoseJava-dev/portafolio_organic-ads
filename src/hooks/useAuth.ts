import { useEffect, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
      if (newSession?.user) {
        setTimeout(() => {
          void supabase
            .rpc("has_role", { _user_id: newSession.user.id, _role: "admin" })
            .then(({ data }) => setIsAdmin(Boolean(data)));
        }, 0);
      } else {
        setIsAdmin(false);
      }
    });

    void supabase.auth.getSession().then(async ({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      if (data.session?.user) {
        const { data: roleData } = await supabase.rpc("has_role", {
          _user_id: data.session.user.id,
          _role: "admin",
        });
        setIsAdmin(Boolean(roleData));
      }
      setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return { session, user, isAdmin, loading };
}
