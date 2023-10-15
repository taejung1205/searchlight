"use client";

import { Header } from "@/components/header/header";

export default function Page() {
    return (
      <div>
        <Header currentPage={"/fair/2023"} />
        <p className="W2">페어 페이지</p>
      </div>
    );
  }
  