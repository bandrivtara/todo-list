import React, {ReactNode, Fragment} from 'react';

export const Layout: React.FC<{ children?: ReactNode }> = ({children}) => {

    return (
        <Fragment>
            <header>
                <div className="logo">
                    Todo-List
                </div>
                <div>
                    <img src="./media/logout.png" alt="logout"/>
                </div>
            </header>
            <section>
                {children}
            </section>
        </Fragment>
    );
};
