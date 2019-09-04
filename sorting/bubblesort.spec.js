describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(window, 'swap').and.callThrough(); 
    });
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
      expect(swap.calls.count()).toEqual(0);
    });
    it('handles single item', function() {
        expect(bubbleSort([1])).toEqual([1]);
        expect(swap.calls.count()).toEqual(0);
    });
    it('handles multiple items', function() {
        expect(bubbleSort([1,5,2,6])).toEqual([1,2,5,6]);
        expect(swap.calls.count()).toEqual(1);
    });
    it('handles complicated items', function() {
        expect(bubbleSort([1,5,2,6,100, 87, 55])).toEqual([1,2,5,6,55,87,100]);
        expect(swap.calls.count()).toEqual(5);
    });
});
