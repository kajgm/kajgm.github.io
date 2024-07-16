import React from "react";
import Link from "next/link";

export function Logo(props: { children: React.ReactNode }) {
  return (
    <div className="pt-1">
      <Link href="/">
        <div className="w-24 h-14 relative rounded-xl bg-gradient-to-tr from-red-950 to-red-700">
          <p className="pl-2 pt-2 text-white [text-shadow:_6px_4px_8px_rgb(0_0_0_/_60%)] absolute text-3xl font-pmarker tracking-wider">
            {props.children}
          </p>
        </div>
      </Link>
    </div>
  );
}
