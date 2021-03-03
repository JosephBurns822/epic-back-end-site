import {Entity, model, property} from '@loopback/repository';

@model()
export class Course extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  semester: string;

  @property({
    type: 'number',
    required: true,
  })
  year: number;

  @property({
    type: 'string',
    required: true,
  })
  prefix: string;

  @property({
    type: 'string',
    required: true,
  })
  number: string;

  @property({
    type: 'string',
  })
  section?: string;


  constructor(data?: Partial<Course>) {
    super(data);
  }
}

export interface CourseRelations {
  // describe navigational properties here
}

export type CourseWithRelations = Course & CourseRelations;
