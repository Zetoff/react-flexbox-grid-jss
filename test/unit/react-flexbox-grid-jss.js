import Grid from '../../src/react-flexbox-grid-jss';

describe('Grid', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(Grid, 'greet');
      Grid.greet();
    });

    it('should have been run once', () => {
      expect(Grid.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(Grid.greet).to.have.always.returned('hello');
    });
  });
});
