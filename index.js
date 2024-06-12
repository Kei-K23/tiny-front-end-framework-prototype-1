import { init } from "./framework/index"
import { User } from "./src/user";

const name = "Arkar Min";

init("#app", User({ firstName: name, lastName: "Min Again" }));