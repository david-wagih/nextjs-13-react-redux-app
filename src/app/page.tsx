// want to design a login page
"use client";

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}

function handleSubmit(e: any) {
  e.preventDefault();
  console.log(e.target.username.value);
  console.log(e.target.password.value);
}

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          style={{
            width: "100%",
            padding: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          style={{
            width: "100%",
            padding: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        />
        <button
          type="submit"
          style={{
            width: "50%",
            margin: "auto",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
