import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll()
  }

  @Get(":id")
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id)
  }

  @Patch(":id")
  update(@Param('id', ParseIntPipe) id: number) {}

  @Delete(":id")
  remove(@Param('id', ParseIntPipe) id: number) {}
}
