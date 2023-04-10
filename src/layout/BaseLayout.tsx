import Button from '@/components/commons/ui/Button';
import React, { PropsWithChildren } from 'react';

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="h-14 bg-blue-200 p-2 px-4 flex items-center justify-between text-gray-600">
        <p>Weather</p>
        <Button text="Log out" />
      </div>
      {children}
    </div>
  );
};
