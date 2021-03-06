import React from 'react';
import styled from 'styled-components';
import DataTable from './DataTable';
import SearchForm from './SearchForm';

interface AppProps {
  name: string;
}

type ContainerProps = {
  padding?: string | 0;
  margin?: string | 0;
};

export const Container = styled.div<ContainerProps>`
  padding: ${props => ('padding' in props ? props.padding : '0')};
  margin: ${props => ('margin' in props ? props.margin : 0)};
`;

export default function App({ name }: AppProps) {
  return (
    <Container>
      <SearchForm></SearchForm>
      <DataTable></DataTable>
    </Container>
  );
}
