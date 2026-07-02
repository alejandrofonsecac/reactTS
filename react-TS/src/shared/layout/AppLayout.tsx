import './AppLayout.css';

export const AppLayout = ({children}: React.PropsWithChildren) =>{
    return(
        <>
            <header className="layout-base">
                <div className="container-link">
                    <a>Home</a>
                    <a>Users</a>
                </div>
            </header>

            {children}
        </>
    )
}