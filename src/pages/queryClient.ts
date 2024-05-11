// queryClient.ts
import {QueryClient} from 'react-query';
import {defaultOptions} from '../Configs/ReactQuery/raectQuerySettings';

export const queryClient = new QueryClient({
    defaultOptions,
});