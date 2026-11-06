import * as api from '@lp-labs/http-date-codec';
import { formatHttpDate, parseHttpDate } from '@lp-labs/http-date-codec';
console.log(formatHttpDate(new Date('2025-01-01T00:00:00Z')));
// @ts-expect-error invalid argument must be rejected by declarations
api.formatHttpDate('2025-01-01');
