import moment from 'moment';
import 
{ 
	setStartDate, 
	setEndDate, 
	setTextFilter, 
	sortByDate, 
	sortByAmount 
} from '../../actions/filters';

test('should generate a set text filter action object', () =>
{
	const text = 'Test input text';
	const action = setTextFilter(text);
	expect(action).toEqual(
	{
		type: 'SET_TEXT_FILTER',
		text
	});
});

test('should generate a default set text filter action object', () =>
{
	const action = setTextFilter();
	expect(action).toEqual(
	{
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should generate action object sort by date', () =>
{
	expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by amount filter action object', () =>
{
	expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate set start date action object', () =>
{
	const action = setStartDate(moment(0));
	expect(action).toEqual(
	{
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date action object', () =>
{
	const action = setEndDate(moment(0));
	expect(action).toEqual(
	{
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});