import React from "react";
import Link from "next/link";

export function Logo(props: { children: React.ReactNode }) {
  return (
    <div className="pt-1">
      <Link href="/">
        <div className="w-24 h-14 [box-shadow:_2px_2px_6px_rgb(0_0_0_/_80%)] relative from-red-900 from-20% via-red-700 via-50% to-violet-800 to-100% rounded-xl transition-all bg-left-bottom hover:bg-right-top bg-gradient-to-tr ease-in-out duration-700 bg-[length:200%_200%]">
          <p
            className="pl-2 pt-2 text-white [text-shadow:_6px_4px_8px_rgb(0_0_0_/_60%)] absolute text-3xl font-pmarker tracking-wider"
            data-testid="logo"
          >
            {props.children}
          </p>
        </div>
      </Link>
    </div>
  );
}
