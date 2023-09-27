import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ConnectionCursor: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AddContentsToLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddDiciplinesToLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddDisciplinesToStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddStudentsToDiciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type BaseDto = {
  __typename?: 'BaseDTO';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  updateAt: Scalars['DateTime']['output'];
};

export type BaseDtoAggregateGroupBy = {
  __typename?: 'BaseDTOAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseDtoConnection = {
  __typename?: 'BaseDTOConnection';
  /** Array of edges. */
  edges: Array<BaseDtoEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type BaseDtoCountAggregate = {
  __typename?: 'BaseDTOCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Int']['output']>;
};

export type BaseDtoDeleteFilter = {
  and?: InputMaybe<Array<BaseDtoDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BaseDtoDeleteFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type BaseDtoDeleteResponse = {
  __typename?: 'BaseDTODeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseDtoEdge = {
  __typename?: 'BaseDTOEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the BaseDTO */
  node: BaseDto;
};

export type BaseDtoFilter = {
  and?: InputMaybe<Array<BaseDtoFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BaseDtoFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type BaseDtoMaxAggregate = {
  __typename?: 'BaseDTOMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseDtoMinAggregate = {
  __typename?: 'BaseDTOMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseDtoSort = {
  direction: SortDirection;
  field: BaseDtoSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BaseDtoSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdateAt = 'updateAt'
}

export type BaseDtoUpdateFilter = {
  and?: InputMaybe<Array<BaseDtoUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BaseDtoUpdateFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type Content = {
  __typename?: 'Content';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lesson: Lesson;
  linkContent?: Maybe<Scalars['String']['output']>;
  updateAt: Scalars['DateTime']['output'];
};

export type ContentAggregateGroupBy = {
  __typename?: 'ContentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  linkContent?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  /** Array of nodes. */
  nodes: Array<Content>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ContentCountAggregate = {
  __typename?: 'ContentCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  linkContent?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Int']['output']>;
};

export type ContentDeleteFilter = {
  and?: InputMaybe<Array<ContentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentDeleteFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type ContentDeleteResponse = {
  __typename?: 'ContentDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  linkContent?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentFilter = {
  and?: InputMaybe<Array<ContentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  lesson?: InputMaybe<ContentFilterlessonFilter>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type ContentFilterlessonFilter = {
  and?: InputMaybe<Array<ContentFilterlessonFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentFilterlessonFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type ContentMaxAggregate = {
  __typename?: 'ContentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  linkContent?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentMinAggregate = {
  __typename?: 'ContentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  linkContent?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentSort = {
  direction: SortDirection;
  field: ContentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContentSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  LinkContent = 'linkContent',
  UpdateAt = 'updateAt'
}

export type ContentUpdateFilter = {
  and?: InputMaybe<Array<ContentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContentUpdateFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type CreateBaseDto = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateContentDto = {
  description: Scalars['String']['input'];
  lessonId?: InputMaybe<Scalars['String']['input']>;
  linkContent?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDiciplineDto = {
  name: Scalars['String']['input'];
};

export type CreateLessonDto = {
  description: Scalars['String']['input'];
  diciplineId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateManyBaseDtosInput = {
  /** Array of records to create */
  baseDTOS: Array<CreateBaseDto>;
};

export type CreateManyContentsInput = {
  /** Array of records to create */
  contents: Array<CreateContentDto>;
};

export type CreateManyDiciplinesInput = {
  /** Array of records to create */
  diciplines: Array<CreateDiciplineDto>;
};

export type CreateManyLessonsInput = {
  /** Array of records to create */
  lessons: Array<CreateLessonDto>;
};

export type CreateManyStudentsInput = {
  /** Array of records to create */
  students: Array<CreateStudentDto>;
};

export type CreateOneBaseDtoInput = {
  /** The record to create */
  baseDTO: CreateBaseDto;
};

export type CreateOneContentInput = {
  /** The record to create */
  content: CreateContentDto;
};

export type CreateOneDiciplineInput = {
  /** The record to create */
  dicipline: CreateDiciplineDto;
};

export type CreateOneLessonInput = {
  /** The record to create */
  lesson: CreateLessonDto;
};

export type CreateOneStudentInput = {
  /** The record to create */
  student: CreateStudentDto;
};

export type CreateStudentDto = {
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteManyBaseDtosInput = {
  /** Filter to find records to delete */
  filter: BaseDtoDeleteFilter;
};

export type DeleteManyContentsInput = {
  /** Filter to find records to delete */
  filter: ContentDeleteFilter;
};

export type DeleteManyDiciplinesInput = {
  /** Filter to find records to delete */
  filter: DiciplineDeleteFilter;
};

export type DeleteManyLessonsInput = {
  /** Filter to find records to delete */
  filter: LessonDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManyStudentsInput = {
  /** Filter to find records to delete */
  filter: StudentDeleteFilter;
};

export type DeleteOneBaseDtoInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneContentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneDiciplineInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneLessonInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneStudentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DiciplineConnection = {
  __typename?: 'DiciplineConnection';
  /** Array of nodes. */
  nodes: Array<Dicipline>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DiciplineDeleteResponse = {
  __typename?: 'DiciplineDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiciplineStudentsConnection = {
  __typename?: 'DiciplineStudentsConnection';
  /** Array of nodes. */
  nodes: Array<Student>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  /** Array of nodes. */
  nodes: Array<Lesson>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LessonContentsConnection = {
  __typename?: 'LessonContentsConnection';
  /** Array of nodes. */
  nodes: Array<Content>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type LessonDeleteResponse = {
  __typename?: 'LessonDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonDiciplinesConnection = {
  __typename?: 'LessonDiciplinesConnection';
  /** Array of nodes. */
  nodes: Array<Dicipline>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContentsToLesson: Lesson;
  addDiciplinesToLesson: Lesson;
  addDisciplinesToStudent: Student;
  addStudentsToDicipline: Dicipline;
  createManyBaseDTOS: Array<BaseDto>;
  createManyContents: Array<Content>;
  createManyDiciplines: Array<Dicipline>;
  createManyLessons: Array<Lesson>;
  createManyStudents: Array<Student>;
  createOneBaseDTO: BaseDto;
  createOneContent: Content;
  createOneDicipline: Dicipline;
  createOneLesson: Lesson;
  createOneStudent: Student;
  deleteManyBaseDTOS: DeleteManyResponse;
  deleteManyContents: DeleteManyResponse;
  deleteManyDiciplines: DeleteManyResponse;
  deleteManyLessons: DeleteManyResponse;
  deleteManyStudents: DeleteManyResponse;
  deleteOneBaseDTO: BaseDtoDeleteResponse;
  deleteOneContent: ContentDeleteResponse;
  deleteOneDicipline: DiciplineDeleteResponse;
  deleteOneLesson: LessonDeleteResponse;
  deleteOneStudent: StudentDeleteResponse;
  removeContentsFromLesson: Lesson;
  removeDiciplinesFromLesson: Lesson;
  removeDisciplinesFromStudent: Student;
  removeLessonFromContent: Content;
  removeStudentsFromDicipline: Dicipline;
  setContentsOnLesson: Lesson;
  setDiciplinesOnLesson: Lesson;
  setDisciplinesOnStudent: Student;
  setLessonOnContent: Content;
  setStudentsOnDicipline: Dicipline;
  updateManyBaseDTOS: UpdateManyResponse;
  updateManyContents: UpdateManyResponse;
  updateManyDiciplines: UpdateManyResponse;
  updateManyLessons: UpdateManyResponse;
  updateManyStudents: UpdateManyResponse;
  updateOneBaseDTO: BaseDto;
  updateOneContent: Content;
  updateOneDicipline: Dicipline;
  updateOneLesson: Lesson;
  updateOneStudent: Student;
};


export type MutationAddContentsToLessonArgs = {
  input: AddContentsToLessonInput;
};


export type MutationAddDiciplinesToLessonArgs = {
  input: AddDiciplinesToLessonInput;
};


export type MutationAddDisciplinesToStudentArgs = {
  input: AddDisciplinesToStudentInput;
};


export type MutationAddStudentsToDiciplineArgs = {
  input: AddStudentsToDiciplineInput;
};


export type MutationCreateManyBaseDtosArgs = {
  input: CreateManyBaseDtosInput;
};


export type MutationCreateManyContentsArgs = {
  input: CreateManyContentsInput;
};


export type MutationCreateManyDiciplinesArgs = {
  input: CreateManyDiciplinesInput;
};


export type MutationCreateManyLessonsArgs = {
  input: CreateManyLessonsInput;
};


export type MutationCreateManyStudentsArgs = {
  input: CreateManyStudentsInput;
};


export type MutationCreateOneBaseDtoArgs = {
  input: CreateOneBaseDtoInput;
};


export type MutationCreateOneContentArgs = {
  input: CreateOneContentInput;
};


export type MutationCreateOneDiciplineArgs = {
  input: CreateOneDiciplineInput;
};


export type MutationCreateOneLessonArgs = {
  input: CreateOneLessonInput;
};


export type MutationCreateOneStudentArgs = {
  input: CreateOneStudentInput;
};


export type MutationDeleteManyBaseDtosArgs = {
  input: DeleteManyBaseDtosInput;
};


export type MutationDeleteManyContentsArgs = {
  input: DeleteManyContentsInput;
};


export type MutationDeleteManyDiciplinesArgs = {
  input: DeleteManyDiciplinesInput;
};


export type MutationDeleteManyLessonsArgs = {
  input: DeleteManyLessonsInput;
};


export type MutationDeleteManyStudentsArgs = {
  input: DeleteManyStudentsInput;
};


export type MutationDeleteOneBaseDtoArgs = {
  input: DeleteOneBaseDtoInput;
};


export type MutationDeleteOneContentArgs = {
  input: DeleteOneContentInput;
};


export type MutationDeleteOneDiciplineArgs = {
  input: DeleteOneDiciplineInput;
};


export type MutationDeleteOneLessonArgs = {
  input: DeleteOneLessonInput;
};


export type MutationDeleteOneStudentArgs = {
  input: DeleteOneStudentInput;
};


export type MutationRemoveContentsFromLessonArgs = {
  input: RemoveContentsFromLessonInput;
};


export type MutationRemoveDiciplinesFromLessonArgs = {
  input: RemoveDiciplinesFromLessonInput;
};


export type MutationRemoveDisciplinesFromStudentArgs = {
  input: RemoveDisciplinesFromStudentInput;
};


export type MutationRemoveLessonFromContentArgs = {
  input: RemoveLessonFromContentInput;
};


export type MutationRemoveStudentsFromDiciplineArgs = {
  input: RemoveStudentsFromDiciplineInput;
};


export type MutationSetContentsOnLessonArgs = {
  input: SetContentsOnLessonInput;
};


export type MutationSetDiciplinesOnLessonArgs = {
  input: SetDiciplinesOnLessonInput;
};


export type MutationSetDisciplinesOnStudentArgs = {
  input: SetDisciplinesOnStudentInput;
};


export type MutationSetLessonOnContentArgs = {
  input: SetLessonOnContentInput;
};


export type MutationSetStudentsOnDiciplineArgs = {
  input: SetStudentsOnDiciplineInput;
};


export type MutationUpdateManyBaseDtosArgs = {
  input: UpdateManyBaseDtosInput;
};


export type MutationUpdateManyContentsArgs = {
  input: UpdateManyContentsInput;
};


export type MutationUpdateManyDiciplinesArgs = {
  input: UpdateManyDiciplinesInput;
};


export type MutationUpdateManyLessonsArgs = {
  input: UpdateManyLessonsInput;
};


export type MutationUpdateManyStudentsArgs = {
  input: UpdateManyStudentsInput;
};


export type MutationUpdateOneBaseDtoArgs = {
  input: UpdateOneBaseDtoInput;
};


export type MutationUpdateOneContentArgs = {
  input: UpdateOneContentInput;
};


export type MutationUpdateOneDiciplineArgs = {
  input: UpdateOneDiciplineInput;
};


export type MutationUpdateOneLessonArgs = {
  input: UpdateOneLessonInput;
};


export type MutationUpdateOneStudentArgs = {
  input: UpdateOneStudentInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type Query = {
  __typename?: 'Query';
  baseDTO?: Maybe<BaseDto>;
  baseDTOS: BaseDtoConnection;
  content?: Maybe<Content>;
  contents: ContentConnection;
  dicipline?: Maybe<Dicipline>;
  diciplines: DiciplineConnection;
  lesson?: Maybe<Lesson>;
  lessons: LessonConnection;
  student?: Maybe<Student>;
  students: StudentConnection;
};


export type QueryBaseDtoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBaseDtosArgs = {
  filter?: BaseDtoFilter;
  paging?: CursorPaging;
  sorting?: Array<BaseDtoSort>;
};


export type QueryContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentsArgs = {
  filter?: ContentFilter;
  paging?: OffsetPaging;
  sorting?: Array<ContentSort>;
};


export type QueryDiciplineArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDiciplinesArgs = {
  filter?: DiciplineFilter;
  paging?: OffsetPaging;
  sorting?: Array<DiciplineSort>;
};


export type QueryLessonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLessonsArgs = {
  filter?: LessonFilter;
  paging?: OffsetPaging;
  sorting?: Array<LessonSort>;
};


export type QueryStudentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStudentsArgs = {
  filter?: StudentFilter;
  paging?: OffsetPaging;
  sorting?: Array<StudentSort>;
};

export type RemoveContentsFromLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type RemoveDiciplinesFromLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type RemoveDisciplinesFromStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type RemoveLessonFromContentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type RemoveStudentsFromDiciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetContentsOnLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetDiciplinesOnLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetDisciplinesOnStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetLessonOnContentInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The id of relation. */
  relationId: Scalars['ID']['input'];
};

export type SetStudentsOnDiciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  disciplines?: Maybe<StudentDisciplinesConnection>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updateAt: Scalars['DateTime']['output'];
};


export type StudentDisciplinesArgs = {
  filter?: DiciplineFilter;
  paging?: OffsetPaging;
  sorting?: Array<DiciplineSort>;
};

export type StudentAggregateGroupBy = {
  __typename?: 'StudentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StudentConnection = {
  __typename?: 'StudentConnection';
  /** Array of nodes. */
  nodes: Array<Student>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type StudentCountAggregate = {
  __typename?: 'StudentCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Int']['output']>;
};

export type StudentDeleteFilter = {
  and?: InputMaybe<Array<StudentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentDeleteFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type StudentDeleteResponse = {
  __typename?: 'StudentDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StudentDisciplinesConnection = {
  __typename?: 'StudentDisciplinesConnection';
  /** Array of nodes. */
  nodes: Array<Dicipline>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type StudentFilter = {
  and?: InputMaybe<Array<StudentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  disciplines?: InputMaybe<StudentFilterdiciplineFilter>;
  id?: InputMaybe<StringFieldComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type StudentFilterdiciplineFilter = {
  and?: InputMaybe<Array<StudentFilterdiciplineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentFilterdiciplineFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type StudentMaxAggregate = {
  __typename?: 'StudentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StudentMinAggregate = {
  __typename?: 'StudentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StudentSort = {
  direction: SortDirection;
  field: StudentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StudentSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Key = 'key',
  Name = 'name',
  UpdateAt = 'updateAt'
}

export type StudentUpdateFilter = {
  and?: InputMaybe<Array<StudentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StudentUpdateFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type UpdateBaseDto = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateContentDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lessonId?: InputMaybe<Scalars['String']['input']>;
  linkContent?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDicipline = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateLesson = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updateAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateManyBaseDtosInput = {
  /** Filter used to find fields to update */
  filter: BaseDtoUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateBaseDto;
};

export type UpdateManyContentsInput = {
  /** Filter used to find fields to update */
  filter: ContentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateContentDto;
};

export type UpdateManyDiciplinesInput = {
  /** Filter used to find fields to update */
  filter: DiciplineUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDicipline;
};

export type UpdateManyLessonsInput = {
  /** Filter used to find fields to update */
  filter: LessonUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateLesson;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateManyStudentsInput = {
  /** Filter used to find fields to update */
  filter: StudentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStudentDto;
};

export type UpdateOneBaseDtoInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateBaseDto;
};

export type UpdateOneContentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateContentDto;
};

export type UpdateOneDiciplineInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateDicipline;
};

export type UpdateOneLessonInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateLesson;
};

export type UpdateOneStudentInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateStudentDto;
};

export type UpdateStudentDto = {
  id: Scalars['Int']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Dicipline = {
  __typename?: 'dicipline';
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  students?: Maybe<DiciplineStudentsConnection>;
  updateAt: Scalars['DateTime']['output'];
};


export type DiciplineStudentsArgs = {
  filter?: StudentFilter;
  paging?: OffsetPaging;
  sorting?: Array<StudentSort>;
};

export type DiciplineAggregateGroupBy = {
  __typename?: 'diciplineAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiciplineCountAggregate = {
  __typename?: 'diciplineCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Int']['output']>;
};

export type DiciplineDeleteFilter = {
  and?: InputMaybe<Array<DiciplineDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DiciplineDeleteFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type DiciplineFilter = {
  and?: InputMaybe<Array<DiciplineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DiciplineFilter>>;
  students?: InputMaybe<DiciplineFilterStudentFilter>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type DiciplineFilterStudentFilter = {
  and?: InputMaybe<Array<DiciplineFilterStudentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DiciplineFilterStudentFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type DiciplineMaxAggregate = {
  __typename?: 'diciplineMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiciplineMinAggregate = {
  __typename?: 'diciplineMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiciplineSort = {
  direction: SortDirection;
  field: DiciplineSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DiciplineSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdateAt = 'updateAt'
}

export type DiciplineUpdateFilter = {
  and?: InputMaybe<Array<DiciplineUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DiciplineUpdateFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type Lesson = {
  __typename?: 'lesson';
  contents?: Maybe<LessonContentsConnection>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  diciplines?: Maybe<LessonDiciplinesConnection>;
  id: Scalars['String']['output'];
  updateAt: Scalars['DateTime']['output'];
};


export type LessonContentsArgs = {
  filter?: ContentFilter;
  paging?: OffsetPaging;
  sorting?: Array<ContentSort>;
};


export type LessonDiciplinesArgs = {
  filter?: DiciplineFilter;
  paging?: OffsetPaging;
  sorting?: Array<DiciplineSort>;
};

export type LessonAggregateGroupBy = {
  __typename?: 'lessonAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonCountAggregate = {
  __typename?: 'lessonCountAggregate';
  createdAt?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updateAt?: Maybe<Scalars['Int']['output']>;
};

export type LessonDeleteFilter = {
  and?: InputMaybe<Array<LessonDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonDeleteFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type LessonFilter = {
  and?: InputMaybe<Array<LessonFilter>>;
  contents?: InputMaybe<LessonFilterContentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dicipline?: InputMaybe<LessonFilterdiciplineFilter>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type LessonFilterContentFilter = {
  and?: InputMaybe<Array<LessonFilterContentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  linkContent?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonFilterContentFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type LessonFilterdiciplineFilter = {
  and?: InputMaybe<Array<LessonFilterdiciplineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonFilterdiciplineFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type LessonMaxAggregate = {
  __typename?: 'lessonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonMinAggregate = {
  __typename?: 'lessonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updateAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LessonSort = {
  direction: SortDirection;
  field: LessonSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum LessonSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  UpdateAt = 'updateAt'
}

export type LessonUpdateFilter = {
  and?: InputMaybe<Array<LessonUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<LessonUpdateFilter>>;
  updateAt?: InputMaybe<DateFieldComparison>;
};

export type DeleteOneStudentMutationVariables = Exact<{
  input: DeleteOneStudentInput;
}>;


export type DeleteOneStudentMutation = { __typename?: 'Mutation', deleteOneStudent: { __typename?: 'StudentDeleteResponse', id?: string | null } };

export type CreateOneStudentMutationVariables = Exact<{
  input: CreateOneStudentInput;
}>;


export type CreateOneStudentMutation = { __typename?: 'Mutation', createOneStudent: { __typename?: 'Student', name: string, key: string } };

export type CreateOneDiciplineMutationVariables = Exact<{
  input: CreateOneDiciplineInput;
}>;


export type CreateOneDiciplineMutation = { __typename?: 'Mutation', createOneDicipline: { __typename?: 'dicipline', name: string } };

export type DeleteOneDiciplineMutationVariables = Exact<{
  input: DeleteOneDiciplineInput;
}>;


export type DeleteOneDiciplineMutation = { __typename?: 'Mutation', deleteOneDicipline: { __typename?: 'DiciplineDeleteResponse', id?: string | null } };

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students: { __typename?: 'StudentConnection', nodes: Array<{ __typename?: 'Student', id: string, key: string, name: string }> } };

export type GetDisciplinesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDisciplinesQuery = { __typename?: 'Query', diciplines: { __typename?: 'DiciplineConnection', nodes: Array<{ __typename?: 'dicipline', id: string, name: string, students?: { __typename?: 'DiciplineStudentsConnection', nodes: Array<{ __typename?: 'Student', name: string }> } | null }> } };


export const DeleteOneStudentDocument = gql`
    mutation deleteOneStudent($input: DeleteOneStudentInput!) {
  deleteOneStudent(input: $input) {
    id
  }
}
    `;
export type DeleteOneStudentMutationFn = Apollo.MutationFunction<DeleteOneStudentMutation, DeleteOneStudentMutationVariables>;

/**
 * __useDeleteOneStudentMutation__
 *
 * To run a mutation, you first call `useDeleteOneStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneStudentMutation, { data, loading, error }] = useDeleteOneStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneStudentMutation, DeleteOneStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneStudentMutation, DeleteOneStudentMutationVariables>(DeleteOneStudentDocument, options);
      }
export type DeleteOneStudentMutationHookResult = ReturnType<typeof useDeleteOneStudentMutation>;
export type DeleteOneStudentMutationResult = Apollo.MutationResult<DeleteOneStudentMutation>;
export type DeleteOneStudentMutationOptions = Apollo.BaseMutationOptions<DeleteOneStudentMutation, DeleteOneStudentMutationVariables>;
export const CreateOneStudentDocument = gql`
    mutation createOneStudent($input: CreateOneStudentInput!) {
  createOneStudent(input: $input) {
    name
    key
  }
}
    `;
export type CreateOneStudentMutationFn = Apollo.MutationFunction<CreateOneStudentMutation, CreateOneStudentMutationVariables>;

/**
 * __useCreateOneStudentMutation__
 *
 * To run a mutation, you first call `useCreateOneStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStudentMutation, { data, loading, error }] = useCreateOneStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneStudentMutation, CreateOneStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneStudentMutation, CreateOneStudentMutationVariables>(CreateOneStudentDocument, options);
      }
export type CreateOneStudentMutationHookResult = ReturnType<typeof useCreateOneStudentMutation>;
export type CreateOneStudentMutationResult = Apollo.MutationResult<CreateOneStudentMutation>;
export type CreateOneStudentMutationOptions = Apollo.BaseMutationOptions<CreateOneStudentMutation, CreateOneStudentMutationVariables>;
export const CreateOneDiciplineDocument = gql`
    mutation createOneDicipline($input: CreateOneDiciplineInput!) {
  createOneDicipline(input: $input) {
    name
  }
}
    `;
export type CreateOneDiciplineMutationFn = Apollo.MutationFunction<CreateOneDiciplineMutation, CreateOneDiciplineMutationVariables>;

/**
 * __useCreateOneDiciplineMutation__
 *
 * To run a mutation, you first call `useCreateOneDiciplineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneDiciplineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneDiciplineMutation, { data, loading, error }] = useCreateOneDiciplineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneDiciplineMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneDiciplineMutation, CreateOneDiciplineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneDiciplineMutation, CreateOneDiciplineMutationVariables>(CreateOneDiciplineDocument, options);
      }
export type CreateOneDiciplineMutationHookResult = ReturnType<typeof useCreateOneDiciplineMutation>;
export type CreateOneDiciplineMutationResult = Apollo.MutationResult<CreateOneDiciplineMutation>;
export type CreateOneDiciplineMutationOptions = Apollo.BaseMutationOptions<CreateOneDiciplineMutation, CreateOneDiciplineMutationVariables>;
export const DeleteOneDiciplineDocument = gql`
    mutation deleteOneDicipline($input: DeleteOneDiciplineInput!) {
  deleteOneDicipline(input: $input) {
    id
  }
}
    `;
export type DeleteOneDiciplineMutationFn = Apollo.MutationFunction<DeleteOneDiciplineMutation, DeleteOneDiciplineMutationVariables>;

/**
 * __useDeleteOneDiciplineMutation__
 *
 * To run a mutation, you first call `useDeleteOneDiciplineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneDiciplineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneDiciplineMutation, { data, loading, error }] = useDeleteOneDiciplineMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneDiciplineMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneDiciplineMutation, DeleteOneDiciplineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneDiciplineMutation, DeleteOneDiciplineMutationVariables>(DeleteOneDiciplineDocument, options);
      }
export type DeleteOneDiciplineMutationHookResult = ReturnType<typeof useDeleteOneDiciplineMutation>;
export type DeleteOneDiciplineMutationResult = Apollo.MutationResult<DeleteOneDiciplineMutation>;
export type DeleteOneDiciplineMutationOptions = Apollo.BaseMutationOptions<DeleteOneDiciplineMutation, DeleteOneDiciplineMutationVariables>;
export const GetStudentsDocument = gql`
    query GetStudents {
  students {
    nodes {
      id
      key
      name
    }
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetDisciplinesDocument = gql`
    query GetDisciplines {
  diciplines {
    nodes {
      id
      name
      students {
        nodes {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetDisciplinesQuery__
 *
 * To run a query within a React component, call `useGetDisciplinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisciplinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisciplinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDisciplinesQuery(baseOptions?: Apollo.QueryHookOptions<GetDisciplinesQuery, GetDisciplinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisciplinesQuery, GetDisciplinesQueryVariables>(GetDisciplinesDocument, options);
      }
export function useGetDisciplinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisciplinesQuery, GetDisciplinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisciplinesQuery, GetDisciplinesQueryVariables>(GetDisciplinesDocument, options);
        }
export type GetDisciplinesQueryHookResult = ReturnType<typeof useGetDisciplinesQuery>;
export type GetDisciplinesLazyQueryHookResult = ReturnType<typeof useGetDisciplinesLazyQuery>;
export type GetDisciplinesQueryResult = Apollo.QueryResult<GetDisciplinesQuery, GetDisciplinesQueryVariables>;