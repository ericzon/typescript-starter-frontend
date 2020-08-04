describe('Test Component', () => {
  it('should have no div nodes before execute component', async () => {
    const preDivList = document.querySelectorAll('div');
    expect(preDivList.length).toBe(0);
  });

  it('should have 1 component after import component logic', async () => {
    await import('../index');

    const divList = document.querySelectorAll('div');
    expect(divList.length).toBe(1);

    const newItem = divList[divList.length - 1];

    expect(newItem.innerHTML).toContain('Webpack');
  });
});
