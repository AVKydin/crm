// import {
//   Column,
//   Entity,
//   JoinColumn,
//   OneToOne,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
//
// import { RoleEnum } from '../../common/enum/role.enum';
// import { CreatedUpdatedModel } from './common/created-updated.model';
//
// @Entity('role')
// export class RoleEntity extends CreatedUpdatedModel {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;
//
//   @Column({ type: 'enum', enum: RoleEnum })
//   role: RoleEnum;
//
//   @OneToOne(() => UserEntity, (entity) => entity.role)
//   @JoinColumn()
//   user: UserEntity;
// }
