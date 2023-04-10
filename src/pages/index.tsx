import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';

export default function LandingPage() {
  return (
    <Container>
      <p>
        Welcome to the weather forcast web application. Please login with your
        Github user to use application and view the weather in your city.
      </p>
      <Button text="Login" className="mt-5" />
    </Container>
  );
}
