import Link from "next/link";

export default function NotFound() {
  return (
    <div className="app__flex" style={{ height: "100vh", flexDirection: "column" }}>
      <h2 className="head-text">404 - Page Not Found</h2>
      <p className="p-text" style={{ marginTop: "1rem" }}>
        <Link href="/" style={{ color: "var(--secondary-color)" }}>Go back home</Link>
      </p>
    </div>
  );
}
