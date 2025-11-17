"use client";

import { Crown, Zap } from "lucide-react";

export function SubscriptionBadge() {
  const user = {
    subscription: "pro",
  };

  if (!user || user.subscription === "free") return null;

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-primary to-orange-500 px-3 py-1 text-xs font-semibold text-white">
      {user.subscription === "pro" ? (
        <Crown className="h-3 w-3" />
      ) : (
        <Zap className="h-3 w-3" />
      )}
      {user.subscription.toUpperCase()}
    </div>
  );
}
