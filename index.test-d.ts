import {expectType} from 'tsd';
import email from './index.js';

expectType<string>(email());
expectType<string>(email({domain: 'example.com'}));
