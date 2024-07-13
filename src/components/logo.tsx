import React from "react";
import Link from "next/link";

export function Logo(props: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/">
        <div className="w-24 h-12 relative rounded-lg bg-gradient-to-tr from-rose-950 to-rose-700">
          <p className="pl-2 pt-1 text-white absolute text-3xl font-pmarker">
            {props.children}
          </p>
        </div>
      </Link>
    </div>
  );
}
