import getApi from "../../support/utilities/apiHelper";

const API = new getApi();

describe('Marvel characters', () => {
    it('Get all Marvel characters', () => {     

        cy.request(`${API.url}/v1/public/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`)
        .then((response) => {
            expect(response.body).to.have.property('code', 200);
            expect(response.body).not.to.be.null;
            expect(response.body.data).to.have.property('limit', 100);
        });
    });

    //Invalid scenarios

    it('Get More than 100 Marvel characters', () => {
       
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters?ts=${API.timestamp}&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit + 1}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 409);
            expect(response.body).to.have.property('status', 'You may not request more than 100 items.');
        });
        
    });


    it('Missing timestamp, unable to authenticate', () => {
       
        cy.request({
            method: 'GET',
            url: `${API.url}/v1/public/characters?&apikey=${API.publicKey}&hash=${API.hash}&limit=${API.limit}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body).to.have.property('code', 'MissingParameter');
            expect(response.body).to.have.property('message', 'You must provide a timestamp.');
        });
        
    });

});