function ShuffleDeck(array)
{
    const copiedArray = array.slice(0);
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i +1));
        let temp = copiedArray[i];
        copiedArray[i] = copiedArray[randomIndex];
        copiedArray[randomIndex] = temp;
        
    }

    return copiedArray;
}
export default function InitializeDeck() {

    let id = 0;

    const cards = ['baseball','basketball','boxinggloves','football',
    'hockeypuck','soccerball','tennis', 'volleyball'].reduce((acc, type) => {

        acc.push (
            {
                id: id++,
                type}
            );
            acc.push (
                {
                    id: id++,
                    type}
                );
        return acc;
    }, []);

    console.log(ShuffleDeck(cards));
    
    return ShuffleDeck( cards);
}