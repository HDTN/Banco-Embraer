export default function extractBanknotes(amount: number){
    const notes = [10, 20, 50, 100];
    
    const notesMap = new Map();

    for (let i = notes.length - 1; i >= 0 && amount; i--) {
        const qty = Math.floor(amount / notes[i]);
        qty && notesMap.set(notes[i], qty);
        amount = amount % notes[i];
    }

    return Object.fromEntries(notesMap)
}