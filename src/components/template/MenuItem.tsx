import Link from "next/link";
import React from "react";

interface MenuItemProps {
  icone: any;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className="flex flex-col items-center gap-2">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-7">
        {React.cloneElement(props.icone, {
          size: 80,
          stroke: 1,
          className: "opacity-50",
        })}
      </div>
      <span className="text-zinc-400 font-black text-3xl">{props.texto}</span>
    </Link>
  )
}