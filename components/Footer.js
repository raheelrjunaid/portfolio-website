import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black/50 py-5">
      <div className="container mx-auto text-center text-sm text-slate-500">
        <p>Copyright &#169; by Raheel Junaid {currentYear}</p>
      </div>
    </footer>
  );
}
