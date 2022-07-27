import React from 'react';
import { StyledTabs, TabItem, TabsList } from './styled';
import { Li } from '../../styled';

interface Props {

};

interface Tab {
  value: string;
  id: number;
}

export function Tabs(props: Props) {
  const tabs: Tab[] = [
    {
      id: 0,
      value: 'На день',
    },
    {
      id: 1,
      value: 'На 10 днів',
    },
    {
      id: 2,
      value: 'На місяць',
    },
  ];
  return (
    <StyledTabs>
      <TabsList>
        {tabs.map((tab: Tab) => (
          <Li key={tab.id}>
            <TabItem>{tab.value}</TabItem>
          </Li>))}
      </TabsList>
      <TabItem>Відмінити</TabItem>
    </StyledTabs>
  );
};
