import Button from "@/components/commons/ui/Button";

export default function Home() {
  return (
    <div className="container mx-auto max-w-md p-4 mt-28 text-gray-500">
      <p>
        Welcome to the weather forcast web application. Please login with your
        Github user to use application and view the weather in your city.
      </p>
      <Button text="Login" className="mt-5" />
    </div>
  );
}
