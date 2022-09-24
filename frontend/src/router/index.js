import LoginRouter from './authentication';
import DashBoardRouter from './dashboard';

export default [
    ...LoginRouter,
    ...DashBoardRouter,
];