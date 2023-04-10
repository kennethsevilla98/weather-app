import { SearchInput } from '@/components/commons/ui';
import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';
import React, { useState } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default withPageAuthRequired(function HomePage() {
  const [cityValue, setCityValue] = useState('');
  const router = useRouter();

  const hanldeCityValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(e.target.value);
  };

  const { user } = useUser();

  const githubUrl = 'https://github.com/' + user?.nickname;

  const handleDisplayWeather = () => {
    if (!cityValue) {
    }
    router.push(`weather/${cityValue}`);
  };

  return (
    <Container className="flex flex-col items-center">
      <p>{user?.nickname}</p>
      <a href={githubUrl} target={'_blank'}>
        {githubUrl}
      </a>
      <SearchInput
        className="mt-4"
        placeholder="City"
        onChange={hanldeCityValueChange}
      />
      <Button
        disabled={Boolean(!cityValue)}
        text="Dislay Weather"
        className={`mt-2 px-4 ${
          Boolean(!cityValue) && 'bg-gray-100 text-slate-300'
        }`}
        onClick={handleDisplayWeather}
      />
    </Container>
  );
});
