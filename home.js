const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
    version: '2020-08-01',
    authenticator: new IamAuthenticator({
        apikey: process.env.apikey,
    }),
    serviceUrl: process.env.serviceUrl,
});

exports.handler = async (event) => {
    const analyzeParams = {
        'text': event.historial_clinico_text,
        'features': {
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 5,
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 5,
            },
        },
    };

    const response = await naturalLanguageUnderstanding.analyze(analyzeParams) 

    return response;
};
