import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StudentsDocument = Students & Document;
@Schema({
  timestamps: { createdAt: true, updatedAt: false },
  versionKey: false,
})
export class Students {
  @Prop({
    trim: true,
    require: true,
    maxlength: 16,
    minlength: 2,
  })
  name: string;

  @Prop({
    trim: true,
    require: true,
    maxlength: 16,
    minlength: 2,
  })
  surname: string;

  @Prop({
    // unique: true,
    trim: true,
    require: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Введіть валідний email',
    },
  })
  email: string;

  // @Prop({
  //   trim: true,
  //   require: false,
  //   minlength: 6,
  //   maxlength: 16,
  //   validate: {
  //     validator: function (value) {
  //       return /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
  //     },
  //     message:
  //       'Пароль повинен містити мінімум 1 літеру верхнього регістру, 1 літеру нижнього регістру та 1 цифру',
  //   },
  // })
  // password: string;

  @Prop({
    // unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^\+\d{1,4}\d{1,14}$/.test(value);
      },
      message: 'Введіть номер телефону у форматі +КодКраїниXXXXXXXXX',
    },
  })
  phone: string;

  @Prop({
    min: 18,
    require: true,
  })
  age: number;

  @Prop({
    trim: true,
    require: true,
  })
  course: string;

  @Prop({
    trim: true,
    require: true,
  })
  course_format: string;

  @Prop({
    trim: true,
    require: true,
  })
  course_type: string;

  @Prop({
    trim: true,
    require: true,
  })
  status: string;

  @Prop({
    trim: true,
    require: true,
  })
  sum: number;

  @Prop({
    trim: true,
    require: true,
  })
  alreadyPaid: number;
}

export const StudentsSchema = SchemaFactory.createForClass(Students);
