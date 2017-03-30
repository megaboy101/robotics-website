let contentful = require('contentful'); // Contentful breaks with ES6 imports, have to use Node require()

// Initial config object
const client = contentful.createClient({
    space: 's4vjla2xra32',
    accessToken: '6f3b8db561f4026ef6569f1859186e3d610c8c3f43cfd7184707fec5c0cda82e'
});

// Load About content
export function get_aboutSection() {
    return new Promise((res, rej) => {
        client.getEntries({
            content_type: 'about'
        })
        .then(response => {
            const aboutSection = response.items[0].fields;
            res({
                content: aboutSection.content,
            });
        });
    });
}

// Load mentor data
export function get_mentors() {
    return new Promise((res, rej) => {
        // Do that call...
        client.getEntries({
            content_type: 'mentors'
        })
        .then(response => {
            let mentors = response.items[0].fields.mentor;
            let result = {
                header: response.items[0].fields.header,
                names: [],
                roles: [],
                pictures: []
            };

            for (let data of mentors) {
                result.names.push(data.fields.name);
                result.roles.push(data.fields.profession);
                result.pictures.push(data.fields.picture.fields.file.url);
            }

            res(result);
        });
    });
}

// Load team data
export function get_teams() {
    return new Promise((res, rej) => {
        client.getEntries({
            content_type: 'studentTeam'
        })
        .then(response => {
            let result = [];

            for (let team of response.items) {
                result.push(team.fields);
            }
            res(result);
        });
    });
}

// Load competition data
export function get_competitionSection() {
    return new Promise((res, rej) => {
        client.getEntries({
            content_type: 'competition'
        })
        .then(response => {
            res(response.items[0].fields);
        });
    });
}

export function get_communitySection() {
    return new Promise((res, rej) => {
        client.getEntries({
            content_type: 'community'
        })
        .then(response => {
            res(response.items[0].fields);
        });
    })
}

export function get_supportPage() {
    return new Promise((res, rej) => {
        client.getEntries({
            content_type: 'support'
        })
        .then(response => {
            res(response.items[0].fields);
        });
    })
}