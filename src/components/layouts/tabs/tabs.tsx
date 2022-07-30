import React from 'react';
import { StyledTabs, TabItem, TabsList } from './styled';
import { Li } from '../../styled';
import { Tab } from '../../blocks/days/days';

interface Props {
  tabs: Tab[];
  onClick: (index: number) => void;
  activeTab: number;
};


export function Tabs({tabs, onClick, activeTab}: Props) {

  const isActive = (index: number): boolean => {
    return index === activeTab;
  };

  return (
    <StyledTabs>
      <TabsList>
        {tabs.map((tab: Tab, index) => (
          <Li key={tab.value}>
            <TabItem onClick={() => onClick(index)}
                     $active={isActive(index)}
                     disabled={isActive(index)}
            >{tab.value}</TabItem>
          </Li>))}
      </TabsList>
    </StyledTabs>
  );
};
