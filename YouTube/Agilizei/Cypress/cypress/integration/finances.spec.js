/// <reference types="cypress" />
import { format, prepareLocalStorage } from '../support/utils'

context('Dev Finances', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app', {
            onBeforeLoad: (win) => {
                prepareLocalStorage(win)
            }
        })

        cy.get('#data-table tbody tr').should('have.length', 2)
    })
    it('Cadastrar entradas', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('Mesada')
        cy.get('[name=amount]').type(12)
        cy.get('[type=date]').type('2022-03-02')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 3)
    })
    it('Cadastrar saidas', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('Divida')
        cy.get('[name=amount]').type(-12)
        cy.get('[type=date]').type('2022-03-02')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 3)
    })
    it('Remover entradas e saídas', () => {
        cy.get('td.description')
            .contains('Mesada')
            .parent()
            .find('img[onclick*=remove]')
            .click()
        cy.get('#data-table tbody tr').should('have.length', 1)

        cy.get('td.description')
            .contains('Suco Kapo')
            .siblings()
            .children('img[onclick*=remove]')
            .click()
        cy.get('#data-table tbody tr').should('have.length', 0)
    })
    it('Validar saldo com diversas transações', () => {
        let incomes = 0
        let expenses = 0

        cy.get('#data-table tbody tr')
            .each(($el, index, $list) => {
                cy.get($el)
                    .find('td.income, td.expense')
                    .invoke('text')
                    .then( text => {
                        if(text.includes('-')){
                            expenses += format(text)
                        } else {
                            incomes += format(text)
                        }
                    })
            })
        cy.get('#totalDisplay').invoke('text')
            .then( text => {
                let expectedTotal = incomes + expenses
                let total = format(text)
                expect(total).to.eq(expectedTotal)
            })

    })
});