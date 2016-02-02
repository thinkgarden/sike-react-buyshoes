const MakeConnectedComponent = require("./MakeConnectedComponent");

function connect(store,...cartItems) {
    return (klass) => {

        let klassReplacement = MakeConnectedComponent(klass,store,cartItems);

        return klassReplacement;
    };
}

module.exports = connect;

