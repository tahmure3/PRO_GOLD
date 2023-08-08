import React from "react";

export default function Page({ params, searchParams }: { params: { slug: string }, searchParams: {} }) {
  console.log(searchParams, params)
  return <div></div>;
}
