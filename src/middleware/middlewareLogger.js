const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated State:', store.getState());
};

// function middlewareLogger(store) {
//   return function(next) {
//     return function(action) {
//       console.log('Original State:', store.getState());
//       console.log('Current Action:', action);
//       next(action);
//       console.log('New Updated State:', store.getState());
//     }
//   }
// };

export default middlewareLogger;
