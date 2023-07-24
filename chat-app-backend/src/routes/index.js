import {createChatRoute} from './createChatRoute';
import {getUsersRoute} from './getUsersRoute';


export const routes = [getUsersRoute, createChatRoute];

export {
    protectRoute
}
from './protectRoute';
