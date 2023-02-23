import { test as base } from '@playwright/test';
import { questionsFixture, QuestionsFixture } from '../fixtures/questions';
import { usersFixture, UsersFixture } from '../fixtures/users';
import { combineFixtures } from '../utils/fixtures';

export const questionsTest = base.extend<UsersFixture, QuestionsFixture>(
  combineFixtures(usersFixture, questionsFixture)
);
