'use client'

import Sidebar from "@/app/components/sidebar";
import PageTemplate from "@/app/sidebarlayout";
import { useEffect } from "react";

function TestDulu() {

  return (
    <>
      <div className="layout">
        <PageTemplate></PageTemplate>
        <p>Checking first</p>
      </div>
    </>

  );
}

export default TestDulu