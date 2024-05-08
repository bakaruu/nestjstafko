"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const get_user_by_email_adapter_1 = require("../users/infrastructure/adapters/get-user-by-email.adapter");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userPort) {
        this.userPort = userPort;
    }
    async validateUser(email, pass) {
        const user = await this.userPort.getUserByEmail(email);
        if (user) {
            const passwordMatch = await bcrypt.compare(pass, user.password);
            if (passwordMatch) {
                const { password, ...result } = user;
                return result;
            }
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [get_user_by_email_adapter_1.GetUserByEmailAdapter])
], AuthService);
//# sourceMappingURL=auth.service.js.map