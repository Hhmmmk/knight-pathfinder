const gridData = {
  startingCell: {
    a1: {
      possibilities: {
        b3: {
          paths: [
            ['a1', 'a2', 'a3', 'b3'],
            ['a1', 'b1', 'b2', 'b3'],
          ],
          endCell: 'b3',
        },
        c2: {
          paths: [
            ['a1', 'a2', 'b2', 'c2'],
            ['a1', 'b1', 'c1', 'c2'],
          ],
          endCell: 'c2',
        },
      },
    },
    a2: {
      possibilities: {
        b4: {
          paths: [
            ['a2', 'a3', 'a4', 'b4'],
            ['a2', 'b2', 'b3', 'b4'],
          ],
          endCell: 'b4',
        },
        c3: {
          paths: [
            ['a2', 'a3', 'b3', 'c3'],
            ['a2', 'b2', 'c2', 'c3'],
          ],
          endCell: 'c3',
        },
        c1: {
          paths: [
            ['a2', 'b2', 'c2', 'c1'],
            ['', '', '', ''],
          ],
          endCell: 'c1',
        },
      },
    },
  },
};

export default gridData;
