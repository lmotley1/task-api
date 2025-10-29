import * as taskRepository from '../repositories/taskRepo.js';
import prisma from '../config/db.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getTaskById(id) {
  return taskRepository.findById(id);
}
