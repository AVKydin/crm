import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LeadersDocument = Leaders & Document;
@Schema({
  timestamps: { createdAt: true, updatedAt: false },
  versionKey: false,
})
export class Leaders {
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
  role: string;

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

  @Prop({
    trim: true,
    require: false,
    minlength: 6,
    maxlength: 16,
    validate: {
      validator: function (value) {
        return /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value);
      },
      message:
        'Пароль повинен містити мінімум 1 літеру верхнього регістру, 1 літеру нижнього регістру та 1 цифру',
    },
  })
  password: string;
}

export const LeadersSchema = SchemaFactory.createForClass(Leaders);
