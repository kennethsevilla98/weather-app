import { SearchInput } from '@/components/commons/ui';
import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';
import React, { useState } from 'react';

export default function HomePage() {
  const [cityValue, setCityValue] = useState('');

  const hanldeCityValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityValue(e.target.value);
  };

  return (
    <Container className="flex flex-col items-center">
      <p>{cityValue}</p>
      <p>github id</p>
      <SearchInput
        className="mt-4"
        placeholder="City"
        onChange={hanldeCityValueChange}
      />
      <Button text="Dislay Weather" className="mt-2 px-4" />
    </Container>
  );
}
