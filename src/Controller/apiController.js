"use strict";

class Controller {
    constructor(game) {
        this.game = game;
        this.response = {};
    }

    getResponse() {
        return this.response;
    }

    /**
     * controller.setResponse
     * Sets controller.response
     * @param response
     **/
    setResponse(response) {
        this.response = response;
    }
}

export default Controller;
export let controller = new Controller();
