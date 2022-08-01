import React from 'react';

import { storiesOf } from '@storybook/react';

import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import AppDrawerMenu from '../components/AppDrawerMenu';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import configureStore from "../store";

const store = configureStore();


storiesOf('Welcome', module).add('AppDrawerMenu', () => <Welcome showApp={linkTo('AppDrawerMenu')} />);

storiesOf('AppDrawerMenu', module)
.addDecorator(getStory => <Provider store={store}>{getStory() as any}</Provider>)
.addDecorator(getStory => <MemoryRouter>{getStory() as any}</MemoryRouter>)
.add(
  'with menus items ',
  () => (
    <AppDrawerMenu />
  )
);
