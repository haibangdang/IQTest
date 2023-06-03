// libs
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// components
import CustomHeader from '../CustomHeader';
import SearchBar from '../SearchBar';
// styled-components
import { HomePageWrapper, SearchBarSection } from './HomePage.styled';
// hooks
import { useAppDispatch } from '../../store/hook';
// saga
import { requestBaseRequest } from '../../store/reducers/baseRequest/baseRequest.slice';
import { selectBaseRequest } from '@/store/reducers/baseRequest/baseRequest.selector';
import { requestLogin } from '@/store/reducers/login/login.slice';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestBaseRequest());
    dispatch(
      requestLogin({
        jsonData: {
          email: 'danghai.bang@gmail.com',
          password: '123',
        },
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // logic of search bar
  const baseRequest = useSelector(selectBaseRequest);
  const [results, setResults] = useState<{ name: string }[]>();
  const [selectedProfile, setSelectedProfile] = useState<{
    name: string;
  }>();

  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    if (baseRequest.filter) {
      const filteredValue = baseRequest.filter((film: any) =>
        film.name.toLowerCase().startsWith(target.value),
      );
      setResults(filteredValue);
    }
  };

  return (
    <HomePageWrapper>
      <CustomHeader />

      <SearchBarSection className="d-flex justify-content-center mt-3">
        <SearchBar
          results={results}
          value={selectedProfile?.name}
          renderItem={(item) => <p>{item.name}</p>}
          onChange={handleChange}
          onSelect={(item) => setSelectedProfile(item)}
        />
      </SearchBarSection>
    </HomePageWrapper>
  );
};

export default HomePage;
