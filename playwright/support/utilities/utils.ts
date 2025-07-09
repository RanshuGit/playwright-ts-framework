import { Page } from '@playwright/test';
import * as fs from 'fs';
import path from 'path';

export class Utils {
    constructor(public readonly page: Page) { };

    jsonParser(filename: string) {
    const filePath = path.join(__dirname, '../..', 'fixtures/test-data', filename);
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
  }
}