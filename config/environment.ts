import dev from "./environments/dev";
import staging from "./environments/staging";
import prod from "./environments/prod";

const env = process.env.ENV || "dev";

const environments: any = {
    dev,
    staging,
    prod
};

export default environments[env];