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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("../../application/services/tasks.service");
const update_task_dto_1 = require("../../application/dto/update-task.dto");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async addTasksToProject(projectId, taskIds) {
        return this.taskService.addTasksToProject(projectId, taskIds);
    }
    async deleteTaskFromProject(projectId, taskId) {
        return this.taskService.deleteTaskFromProject(projectId, taskId);
    }
    async updateTaskInProject(projectId, taskId, updateTaskDto) {
        return this.taskService.updateTaskInProject(projectId, taskId, updateTaskDto);
    }
    async patchTaskInProject(projectId, taskId, patchTaskDto) {
        return this.taskService.updateTaskInProject(projectId, taskId, patchTaskDto);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Post)(':projectId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Body)('taskIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addTasksToProject", null);
__decorate([
    (0, common_1.Delete)(':projectId/:taskId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTaskFromProject", null);
__decorate([
    (0, common_1.Put)(':projectId/:taskId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTaskInProject", null);
__decorate([
    (0, common_1.Patch)(':projectId/:taskId'),
    __param(0, (0, common_1.Param)('projectId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "patchTaskInProject", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=task.controller.js.map