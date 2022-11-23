/// <reference types="cypress" />

function uuidv4() {
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;//random number between 0 and 16
    if (d > 0) {//Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

describe('Beeteller App RegisterPage', () => {
  beforeEach(() => {
    cy.visit('localhost:4200/')
  })

  it('displays form register', () => {
    cy.get('.btn-registro').should('be.visible');
    cy.get('.btn-registro').should('have.text', 'Registro');
    cy.get('.btn-registro').click();
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#retype_password').should('be.visible');
    cy.get('.btn-register').should('be.visible');
    cy.get('.btn-register').should('have.text', 'Registrar');
    cy.get('.btn-back').should('be.visible');
    cy.get('.btn-back').should('have.text', 'Voltar');
  })


  it('register user', () => {
    let username = String(uuidv4())
    let password = '123456'
    cy.get('.btn-registro').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#email').type('fulano@gmail.com');
    cy.get('#retype_password').type(password);
    cy.get('.btn-register').click();
    cy.url().should('include', '/login');
    cy.get('#toast-container').should('be.visible');
    cy.get('.toast-message').should('be.visible');
  });

  it('invalid register user', () => {
    let username = String(uuidv4());
    let password = '123456';
    cy.get('.btn-registro').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#email').type('fulano@gmail.com');
    cy.get('#retype_password').type(password);
    cy.get('.btn-register').click();
    cy.url().should('include', '/login');
    cy.get('.btn-registro').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#email').type('fulano@gmail.com');
    cy.get('#retype_password').type(password);
    cy.get('.btn-register').click();
    cy.url().should('include', '/register');
    cy.get('#toast-container').should('be.visible');
    cy.get('.toast-message').should('be.visible');
  });

  it('password not match', () => {
    let username = String(uuidv4());
    let password = '123456';
    cy.get('.btn-registro').click();
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#email').type('fulano@gmail.com');
    cy.get('#retype_password').type('1234567');
    cy.get('.btn-register').click();
    cy.url().should('include', '/register');
    cy.get('#toast-container').should('be.visible');
    cy.get('.toast-message').should('be.visible');
  });

})
