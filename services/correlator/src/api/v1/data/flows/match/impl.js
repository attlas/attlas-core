module.exports = function(context, params) {
  return new Promise( (resolve, reject) => {
    //
    context.docs.getDocById('tags/skills.hard.json')
      .then( (doc) => {
        resolve(doc.contents());
      })
      .catch(e => reject(`Matching algorithm execution error`));
    //
  });
}