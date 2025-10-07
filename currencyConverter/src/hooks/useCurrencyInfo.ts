import { useEffect, useState } from 'react'


function useCurrencyInfo(currency:string){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyfreaks.com/latest?apikey=a1c4389e625e427ea600ef821049c424`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo