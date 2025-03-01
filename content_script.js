let blockedWords = [
    "блін", "чорт", "гад", "сволота", "дурень", "ідіот", "срака", "гівно", "дупа", "сучий", "курва", "блядь",
    "хрін", "мудак", "пизда", "хуйня", "йобаний", "йоб", "довбойоб", "хуй", "наркотики", "травка",
    "гашиш", "кокаїн", "героїн", "екстазі", "марихуана", "секс", "порно", "еротика", "вульгарність", "алкоголь",
    "спирт", "пиво", "горілка", "вино", "коньяк", "шампанське", "ром", "текіла", "віскі", "абсент", "лікер",
    "самогон", "сигарети", "тютюн", "сигара", "кальян", "люлька", "махорка", "нікотин", "блин", "чёрт", "гад",
    "сволочь", "дурак", "идиот", "жопа", "говно", "сука", "блять", "хрен", "тварь", "мудак", "пизда",
    "хуйня", "ёб", "ёбаный", "хуй", "долбоёб", "хуесос", "наркотики", "травка", "гашиш", "кокаин", "героин",
    "экстази", "марихуана", "секс", "порно", "эротика", "похоть", "алкоголь", "спирт", "пиво", "водка", "вино",
    "коньяк", "шампанское", "ром", "текила", "виски", "абсент", "ликёр", "самогон", "сигареты", "табак", "сигара",
    "кальян", "трубка", "махорка", "никотин", "damn", "hell", "idiot", "stupid", "crap", "ass", "bastard", "bitch",
    "shit", "fuck", "piss", "dick", "pussy", "faggot", "cunt", "asshole", "motherfucker", "douchebag", "drugs",
    "weed", "cocaine", "heroin", "meth", "ecstasy", "marijuana", "sex", "porn", "erotica", "nudity", "vulgarity",
    "adult content", "alcohol", "booze", "beer", "whiskey", "vodka", "wine", "tequila", "rum", "brandy", "champagne",
    "gin", "scotch", "absinthe", "liquor", "moonshine", "cigarettes", "tobacco", "cigar", "smoking", "nicotine",
    "vape", "e-cigarette", "hookah", "pipe", "snuff", "chewing tobacco", "інтим", "интим",
    "насильство", "убийство", "кров", "агресія", "напад", "тероризм", "зброя", "пістолет", "ніж", "бомба",
    "насилие", "убийство", "кровь", "агрессия", "нападение", "терроризм", "оружие", "пистолет", "нож", "бомба",
    "violence", "murder", "blood", "aggression", "attack", "terrorism", "weapon", "gun", "knife", "bomb",
    "gambling", "casino", "betting", "lottery", "slots", "poker", "roulette", "dice", "jackpot", "bingo"
];


async function fetchBlockedWords() {
    try {
        localStorage.setItem('blockedWords', JSON.stringify(blockedWords));
    } catch (error) {
        console.error('Error saving in localStorage', error);
    }
}

function loadBlockedWordsFromLocalStorage() {
    const storedWords = localStorage.getItem('blockedWords');
    if (storedWords) {
        blockedWords = JSON.parse(storedWords);
    }
}

function containsBlockedWord(query) {
    const lowerCaseQuery = query.toLowerCase();
    return blockedWords.some(blockedWord => lowerCaseQuery.includes(blockedWord));
}

function checkSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');

    if (searchQuery && containsBlockedWord(searchQuery)) {
        window.location.href = chrome.runtime.getURL("warning.html");
    }
}

window.addEventListener('load', async function() {

    loadBlockedWordsFromLocalStorage();

    if (blockedWords.length === 0) {
        await fetchBlockedWords();
    }

    checkSearchQuery();
});
