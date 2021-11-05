import { Route } from 'react-router-dom';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    return(
        <Route
        {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    )
}