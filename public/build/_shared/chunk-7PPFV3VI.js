import {
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/services/auth/user-context.tsx
var import_react = __toESM(require_react());

// app/utils/assert.ts
function assertValue(value, message = "must be defined") {
  if (value != null) {
    return value;
  } else {
    throw new Error(message);
  }
}

// app/services/auth/user-context.tsx
var UserContext = (0, import_react.createContext)(void 0);
function useUser() {
  return assertValue((0, import_react.useContext)(UserContext), "user not set in context");
}

export {
  UserContext,
  useUser
};
//# sourceMappingURL=/build/_shared/chunk-7PPFV3VI.js.map
