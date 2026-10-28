"use client";
import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";
export function record(name: string, data?: Record<string, string>) {
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true") track(name, data);
}
export function TrackedLink({
  event,
  eventData,
  onClick,
  ...props
}: ComponentProps<typeof Link> & {
  event: string;
  eventData?: Record<string, string>;
}) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        record(event, eventData);
        onClick?.(e);
      }}
    />
  );
}
