function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
    </main>
  );
}

export default NotFound;