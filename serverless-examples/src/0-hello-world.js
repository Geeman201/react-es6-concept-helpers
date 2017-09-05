export const execute = (event, context, callback) => {
  console.log(event);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({'Hello': 'world'})
  })
};