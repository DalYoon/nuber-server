# 1.22 Chat and Message Entities part One

## section.log

- very important lecture
- define entities and types for `Chat`, `Message`

## tips

- checkout `@OneToMany`, `@ManyToOne`, check the usage below

```typescript
// entities/Classroom.ts
import Student from './Student'

@OneToMany(type => Student, student => student.classroom)
students: Student[];
```

```typescript
// entities/Student.ts
import Classroom from './Classroom'

@ManyToOne(type => Classroom, classroom => classroom.students)
classroom: Classroom;
```

## issue

- none

## links

- [typeorm one-to-many, many-to-one relationship docs](https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md)

## added dependencies

### dependencies

### devDependencies
