var app = new Vue({
    el: '#app',

    data: {
        activeIndex: 0,
        highlightedIndex: 0,
        messageMenuIndex: null,
        hover: false,
        message: "",
        searchString: "",
        hover: false,
        displayFunctionality: false,
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]

    },

    methods: {

        getImgUrl: function(indexElement) {
            return `./img/avatar${this.contacts[indexElement].avatar}.jpg`;
        },
        getName: function(indexElement) {
            return this.contacts[indexElement].name;
        },
        changeIndex: function(indexElement) {
            this.activeIndex = indexElement;
            this.messageMenuIndex = null;
        },
        sendNewMessage: function(newMessage) {
            this.contacts[this.activeIndex].messages.push({
                date: moment().format("DD/MM/YYYY hh:mm:ss"),
                message: newMessage,
                status: 'sent',
            });
            this.message = "";
            setTimeout(this.haveNewReply, 1000);
        },
        haveNewReply: function() {
            this.contacts[this.activeIndex].messages.push({
                date: moment().format("DD/MM/YYYY hh:mm:ss"),
                message: 'OK!!',
                status: 'received',
            });
        },
        includesLowerCase: function(inputString, stringToSearch) {
            if (inputString.toLowerCase().includes(stringToSearch.toLowerCase()))
                return true;
            else
                return false;
        },
        higlightContact: function(newIndex) {
            this.highlightedIndex = newIndex;
        },
        showMessageMenu: function(newIndex) {
            if (this.messageMenuIndex == newIndex) {
                this.messageMenuIndex = null;
                this.hover = false;
            } else {
                this.messageMenuIndex = newIndex;
                this.hover = true;
            }
        },
        resetMenuMessage: function() {
            if (this.messageMenuIndex != null && this.hover == false)
                this.messageMenuIndex = null;
        },
        noMoreHover: function() {
            this.hover = false;
        },
        deleteMessage: function(indexPassed) {
            this.contacts[this.activeIndex].messages[indexPassed].status = "deleted"
        },
        returnObject: function(indexPassed) {
            lastIndex = this.contacts[indexPassed].messages.length - 1
            if (this.contacts[indexPassed].messages.length > 0) {
                return this.contacts[indexPassed].messages[lastIndex]
            } else {
                return {
                    date: "",
                    message: "Nessun nuovo messaggio",
                    status: '',
                }
            }
        }

    }
});


//                        date: '10/01/2020 15:30:55',
//  (moment().format())

console.log(moment().format());