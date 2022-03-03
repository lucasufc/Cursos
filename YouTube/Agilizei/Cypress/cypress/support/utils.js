export const format = (value) => {
    let formattedValue = value.replace(',','.').replace('R$','').replace(/\s+/g, '')
    return Number(formattedValue)
}

export const randomNumber = () => {
    return Math.floor(Math.random() * 101) 
}

export const prepareLocalStorage = (win) => {
    win.localStorage.setItem('dev.finances:transactions', JSON.stringify([
        {
            description: "Mesada",
            amount: randomNumber() * 100,
            date: "02/03/2022"
        },
        {
            description: "Suco Kapo",
            amount: -(randomNumber() * 100),
            date: "03/03/2022"  
        }
    ]))
}