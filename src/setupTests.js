import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import './ReactotronConfig';

configure({ adapter: new Adapter() });
