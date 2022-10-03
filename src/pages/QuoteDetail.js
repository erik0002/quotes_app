import {useParams, Route} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Yel', text: 'Learning React is Fun!'},
    {id: 'q2', author: 'Yeliazar', text: 'Learning React is Great!'},
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;
