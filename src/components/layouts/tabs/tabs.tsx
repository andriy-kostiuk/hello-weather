import React from 'react';
import { StyledTabs, TabItem, TabsList } from './styled';
import { Li } from '../../styled';

interface Props {

};

interface Tab {
  value: string;
}

export function Tabs(props: Props) {
  const tabs: Tab[] = [
    {
      value: 'На день',
    },
    {
      value: 'На 10 днів',
    },
    {
      value: 'На місяць',
    },
  ];
  return (
    <StyledTabs>
      <TabsList>
        {tabs.map((tab: Tab) => (
          <Li key={tab.value}>
            <TabItem>{tab.value}</TabItem>
          </Li>))}
      </TabsList>
      <TabItem>Відмінити</TabItem>
    </StyledTabs>
  );
};
