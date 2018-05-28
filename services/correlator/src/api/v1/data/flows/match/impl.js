module.exports = function(context, params) {
  return new Promise( (resolve, reject) => {
    resolve([
    {
      stream1Id:'s1',
      stream2Id:'s2',
      tags:['c++', 'java'],
      value:53.5
    }
    ]);
  });
}