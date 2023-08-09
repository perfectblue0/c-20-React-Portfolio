import React from "react";
import Navtabs from "./NavTabs";

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Giselle Lupercio</h1>
                    </div>
                    <div>
                        <Navtabs
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        ></Navtabs>
                    </div>
                </header>
            </section>
        </div>
    );
}

export default Header;