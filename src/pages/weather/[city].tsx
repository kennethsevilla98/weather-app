import Button from '@/components/commons/ui/Button';
import Container from '@/layout/Container';
import { getCity } from '@/services/getCity';
import { getWeather } from '@/services/getWeather';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function WeatherInfoPage() {
  const router = useRouter();
  const { city } = router.query;
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 450px)' });
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    date: '',
    temp: '',
    description: '',
    main: '',
    pressure: '',
    humidity: '',
  });

  const handleBack = () => {
    router.push('/home');
  };

  const headers = [
    'Date (mm/dd/yyy)',
    'Temp (F)',
    'Description',
    'Main',
    'Pressure',
    'Humidity',
  ];

  useEffect(() => {
    getCity(city as string)
      .then((data) =>
        getWeather(data[0].lat, data[0].lon)
          .then((data) => {
            setData({
              date: dayjs().format('MM/DD/YYYY'),
              temp: data?.main.temp,
              description: data?.weather[0].description,
              main: data?.weather[0].main,
              pressure: data?.main.pressure,
              humidity: data?.main.humidity,
            });
            setIsLoading(false);
          })
          .catch((e) => console.log(e))
      )
      .catch((e) => console.log(e));
  }, [city]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center pt-24 text-xs text-gray-400">
        loading...
      </div>
    );
  }

  return (
    <Container className="max-w-xl flex flex-col text-left text-sm">
      <table className="table p-2">
        <thead className="bg-blue-200 p-2">
          <tr className="p-2">
            {headers
              ?.slice(0, isTabletOrMobile ? 2 : headers.length)
              ?.map((item, i) => (
                <th key={i} className={`border `}>
                  {item}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(data)
              ?.slice(0, isTabletOrMobile ? 2 : Object.keys(data).length)
              ?.map((item: any, i) => (
                <td key={i} className={`border p-2`}>
                  {item}
                </td>
              ))}
          </tr>
        </tbody>
      </table>

      <div className="grid "></div>
      <Button text="back" className="mt-2 self-end" onClick={handleBack} />
    </Container>
  );
});
