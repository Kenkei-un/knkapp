import axios from "axios"; 

export default function Quotes(){
    const [quoteText, setQuoteText]=useState(null);
    async function quote(){
        try{
            const response=await axios.get('https://quote-generator-api-six.vercel.app/api/quotes/random');
            console.log(response);
            setQuoteText(response.quote);
        }catch(er){
            console.error('Error fetching the quote:', er);
        }
    }
    return(
    <>
    <button onClick={quote}>Say</button>
    {quoteText && <p>{quoteText}</p>}
    </>
    );
}