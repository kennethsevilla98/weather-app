import { SearchInput } from '@/components/commons/ui';
import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';
import React, { useState } from 'react';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function HomePage() {
  const [cityValue, setCityValue] = useState('');

  const hanldeCityValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(e.target.value);
  };

  const { user } = useUser();

  const githubUrl = 'https://github.com/' + user?.nickname;

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
      <Button text="Dislay Weather" className="mt-2 px-4" />
    </Container>
  );
});
