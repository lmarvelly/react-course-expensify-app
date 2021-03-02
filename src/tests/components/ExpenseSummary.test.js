import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';

test('should generate an expense totaling $195.00', () =>
{
	const wrapper = shallow(<ExpenseSummary expenses={ expenses[1] } />);
});