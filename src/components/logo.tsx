import React from "react";
import Link from "next/link";

export function Logo(props: { children: React.ReactNode }) {
  return (
    <div className="">
      <Link href="/">
        <div className="w-24 h-12 relative rounded-lg bg-gradient-to-tr from-red-950 to-red-600">
          <p className="pl-2 pt-1 text-white absolute text-3xl font-pmarker">
            {props.children}
          </p>
        </div>
      </Link>
    </div>
  );
}
