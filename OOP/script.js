let config = {

    'ime_prezime': {
        required: true,
        minlenght: 3,
        maxlenght: 20,
    },

    'korisnicko_ime': {
        required: true,
        minlenght: 5,
        maxlenght: 10,
    },

    'email': {
        required: true,
        email: true,
        minlenght: 5,
        maxlenght: 25,
    },

    'broj_telefona': {
        minlenght: 9,
        maxlenght: 15,
    },

    'lozinka': {
        required: true,
        minlenght: 7,
        maxlenght: 30,
        matching: 'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minlenght: 7,
        maxlenght: 30,
        matching: 'lozinka'
    }
};

let validator = new Validator(config);