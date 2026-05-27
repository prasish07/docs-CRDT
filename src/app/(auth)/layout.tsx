import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <nav className="w-full bg-red-300">navbar</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
