import React from 'react';
import { ListItem, TabItem, TabsList } from './styled';
import { Tab } from '../../blocks/days/days';
import { ucFirst } from '../../../utils';

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
          >{ucFirst(tab.value)}</TabItem>
        </ListItem>))}
    </TabsList>
  );
};
