export interface BoardStatusData {
    fetchBoardStatusData();
}

export interface WinningStates {
    fetchWinningStates();
}

export interface BoardData {
    fetchBoardData();
}

export class BoardDataService implements BoardData {

    fetchBoardData = () => {
        return [
            { id: 0, text: 'can you repeat, please?', isChecked: false },
            { id: 1, text: 'Child noises in the background', isChecked: false },
            { id: 2, text: 'Hello, hello?', isChecked: false },
            { id: 3, text: 'i need to jump in another call', isChecked: false },
            { id: 4, text: 'can everyone go on mute', isChecked: false },
            { id: 5, text: 'could you please get closer to the mic', isChecked: false },
            { id: 6, text: '(load painful echo/feedback)', isChecked: false },
            { id: 7, text: 'Next slide, please.', isChecked: false },
            { id: 8, text: 'Can we take this offline?', isChecked: false },
            { id: 9, text: 'is___ on call?', isChecked: false },
            {
                id: 10,
                text: 'Could you share this slides afterwards?',
                isChecked: false,
            },
            {
                id: 11,
                text: 'can somebody grant presentater rights?',
                isChecked: false,
            },
            { id: 12, text: 'Conf Call Bingo 😎', isChecked: true },
            { id: 13, text: 'can you email that to everyone', isChecked: false },
            { id: 14, text: 'sorry, i had problem loging in', isChecked: false },
            { id: 15, text: '(animal noises in background)', isChecked: false },
            { id: 16, text: 'sorry, i did not find the conf id', isChecked: false },
            { id: 17, text: 'i was having connection issue', isChecked: false },
            { id: 18, text: "i'll have to get back to you", isChecked: false },
            { id: 19, text: 'who just joined?', isChecked: false },
            { id: 20, text: 'sorry, something ___ with my calendar', isChecked: false },
            { id: 21, text: 'do you see my screen?', isChecked: false },
            { id: 22, text: 'lets wait for ___', isChecked: false },
            { id: 23, text: 'You will send the minutes?', isChecked: false },
            { id: 24, text: 'sorry, i was on mute', isChecked: false },
        ]
    }
}

export class BoardStatusService implements BoardStatusData {
    fetchBoardStatusData = () => {
        return [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            'checked',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ]
    }
}

export class WinningStatesService implements WinningStates {
    fetchWinningStates = () => {
        return [
            [0, 1, 2, 3, 4],
            [0, 6, 12, 18, 24],
            [5, 6, 7, 8, 9],
            [10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24],
            [0, 5, 10, 15, 20],
            [1, 6, 11, 16, 21],
            [2, 7, 12, 17, 22],
            [3, 8, 13, 18, 23],
            [4, 9, 14, 19, 24],
            [4, 8, 12, 16, 20],
        ]
    }
}