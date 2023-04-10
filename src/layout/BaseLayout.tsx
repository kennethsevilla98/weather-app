import React, { PropsWithChildren } from "react";

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="h-14 bg-blue-200 p-2 px-4 flex items-center justify-between text-gray-600">
        <p>Weather</p>
        <button className="shadow-xl bg-blue-100 p-2 text-xs">Log out</button>
      </div>
      {children}
    </div>
  );
};
