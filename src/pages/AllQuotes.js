import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Yel', text: 'Learning React is Fun!'},
    {id: 'q2', author: 'Yeliazar', text: 'Learning React is Great!'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuotes;
