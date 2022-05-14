import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../rocketsRedux/store';
import Rocket from '../components/Rockets';
import Missions from '../Pages/missionPage';
import MyProfile from '../components/myProfile';

it('renders rockets in an expected way', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Rocket />
      {' '}

    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders missions in an expected way', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
      {' '}
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders profile in an expected way', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MyProfile />
      {' '}
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
