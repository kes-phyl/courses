import { useState, useEffect } from "react";
import { fetchData } from "@/utils";
import Table from "@/components/Table";

export default function Home() {
// const course =  fetchData();
// console.log(typeof course)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <h1>Here is a list of all courses</h1>
     <Table/>
     </div>
    </main>
  );
}
