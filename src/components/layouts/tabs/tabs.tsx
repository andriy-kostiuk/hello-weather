import React from 'react';
import { ListItem, TabItem, TabsList } from './styled';
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
    <TabsList>
      {tabs.map((tab: Tab, index) => (
        <ListItem key={tab.value}>
          <TabItem onClick={() => onClick(index)}
                   $active={isActive(index)}
                   disabled={isActive(index)}
          >{tab.value}</TabItem>
        </ListItem>))}
    </TabsList>
  );
};
