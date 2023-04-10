import Button from '@/components/commons/ui/Button';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();
  return (
    <div>
      <div className="h-14 bg-blue-200 p-2 px-4 flex items-center justify-between text-gray-600">
        <p>Weather</p>
        {user && (
          <Button
            text="Log out"
            onClick={() => router.push('/api/auth/logout')}
          />
        )}
      </div>
      {children}
    </div>
  );
};
