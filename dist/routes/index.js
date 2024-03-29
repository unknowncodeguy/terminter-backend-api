"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const machine_1 = require("../controllers/machine");
const machine_2 = require("../api/machine");
const vote_1 = require("../api/vote");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/user/login', user_1.login);
router.post('/user/logout', user_1.logout);
router.post('/user/authenticated', user_1.verify);
router.post('/register', user_1.register);
router.get('/get-machines', machine_1.getMachines);
router.post('/get-machine', machine_1.getMachine);
router.post('/add-machine', machine_1.addMachine);
router.post('/edit-machine', machine_1.editMachine);
router.post('/delete-machine', machine_1.deleteMachine);
router.post('/delete-all-machines', machine_1.deleteAllMachines);
router.get('/api/get-machines', machine_2.apiGetMachines);
router.post('/api/set-vote', vote_1.apiSetVote);
exports.default = router;
//# sourceMappingURL=index.js.map