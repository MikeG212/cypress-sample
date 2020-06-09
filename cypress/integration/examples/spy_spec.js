describe('Spy Test!', function() {
    it('can spy on foo', function() {
        const obj = {
            foo() { }
        }
        const spy = cy.spy(obj, 'foo').as('anyArgs')
        const withFoo = spy.withArgs('foo').as('withFoo')

        obj.foo()
        obj.foo('foo');
        expect(spy).to.be.called
        expect(withFoo).to.be.called
    })
})
