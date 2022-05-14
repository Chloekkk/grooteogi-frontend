import React, { useState } from 'react';
import Image from 'next/image';
import { Styled } from './SearchBar.styled';
import Typography from '@components/common/Typography';

const fetchedData = [
  { keyword: '대외활동' },
  { keyword: '대학생활' },
  { keyword: '유학' },
  { keyword: '동아리' },
  { keyword: 'typescript' },
  { keyword: 'awesome' },
  { keyword: 'how to be a developer' },
  { keyword: 'reactjs' },
];

type fetchedDataType = {
  keyword: string;
};

interface InputProps {
  placeholder?: string;
}

const SearchBar: React.FC<InputProps> = ({ placeholder }) => {
  const [filteredData, setFilteredData] = useState<fetchedDataType[]>([]);
  const [wordEntered, setWordEntered] = useState<string>('');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = fetchedData.filter(value => {
      return value.keyword.includes(searchWord);
    });
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <Styled.container>
      <Styled.section>
        <Styled.input type={'text'} value={wordEntered} onChange={handleFilter} placeholder={placeholder} />
        <Image src={'/logos/search.png'} alt={'search icon not found'} width={'16px'} height={'16px'} />
      </Styled.section>
      {filteredData.length !== 0 && (
        <Styled.ul>
          {filteredData.map(item => {
            return (
              <Styled.li key={item.keyword}>
                <Typography size={'sm'} color={'black'}>
                  {item.keyword}
                </Typography>
                <Image
                  src="/logos/arrow-up.png"
                  alt="arrow icon not found"
                  width={'12x'}
                  height={'12px'}
                  onClick={() => {
                    setWordEntered(item.keyword);
                    setFilteredData([]);
                  }}
                />
              </Styled.li>
            );
          })}
        </Styled.ul>
      )}
    </Styled.container>
  );
};

export default SearchBar;
