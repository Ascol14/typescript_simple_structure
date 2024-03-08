import Items from '../src/items';

describe('Items', () => {

    it('should return the first item', async () => {
        expect(Items.getFirstItem()).toBe('Item1');
    })

})