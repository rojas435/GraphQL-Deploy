import 'reflect-metadata';
import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Injectable, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {
    console.log('UserResolver constructor called');
    console.log('UserService injected:', this.userService ? 'Yes' : 'No');
  }

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getUsers(@Ctx() ctx) {
    return this.userService.getAll();
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  async getUser(@Arg('id') id: string, @Ctx() ctx) {
    return this.userService.findById(id);
  }

  @Mutation(() => User)
  async createUser(@Arg('createUserDto') createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateUser(
    @Arg('id') id: string,
    @Arg('updateUserDto') updateUserDto: UpdateUserDto,
    @Ctx() ctx
  ) {
    const user = ctx.req.user;
    // Solo admin puede modificar cualquier usuario, los demás solo el suyo
    if (user.role !== 'admin' && user.id !== id) {
      throw new Error('No tienes permisos para modificar este usuario');
    }
    return this.userService.update(id, updateUserDto);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async deleteUser(@Arg('id') id: string) {
    await this.userService.delete(id);
    return true;
  }
}