const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
  };
  
  const gameReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case "gather": {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1,
        };
      }
      case "travel": {
        if (state.supplies - 20 * action.payload < 0) {
          return {
            ...state,
          };
        } else {
          return {
            ...state,
            supplies: state.supplies - 20 * action.payload,
            distance: state.distance + 10 * action.payload,
            days: state.days + 1 * action.payload,
          };
        }
      }
      case "tippedWagon": {
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  let wagon = gameReducer(undefined, {});
  console.log(wagon);
  
  wagon = gameReducer(wagon, { type: "travel", payload: 1 });
  console.log(wagon);
  
  wagon = gameReducer(wagon, { type: "gather" });
  console.log(wagon);
  
  wagon = gameReducer(wagon, { type: "tippedWagon" });
  console.log(wagon);
  
  wagon = gameReducer(wagon, { type: "travel", payload: 4 });
  console.log(wagon);