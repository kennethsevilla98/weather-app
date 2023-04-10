import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import { use, useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  });

  return (
    <Container>
      <p>
        Welcome to the weather forcast web application. Please login with your
        Github user to use application and view the weather in your city.
      </p>
      <Button
        text="Login"
        className="mt-5"
        onClick={() => router.push('/api/auth/login')}
      />
    </Container>
  );
}
